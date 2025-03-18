use crate::{
    components::{page_base::PageBase, project_list_html::ProjectList},
    project_data::{category, Project},
};
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct ProjectPageProperty {
    pub project_kebab_name: String,
}

#[function_component]
pub fn ProjectPage(ProjectPageProperty { project_kebab_name }: &ProjectPageProperty) -> Html {
    if !Project::project_map_by_kebab().contains_key(project_kebab_name) {
        return html! {
            <PageBase>
                <p>{"The project \""} {project_kebab_name} {"\" does not exist."}</p>
                <p>{"Check your url for typos or go to the "} <a href="/"> {"main page"} </a> {"."}</p>
            </PageBase>
        };
    }

    let project = Project::project_map_by_kebab()
        .get(project_kebab_name)
        .unwrap()
        .clone();

    let video_html = match project.youtube_embed {
        Some(youtube_embed) => {
            const MAX_WIDTH: f64 = 80.; // already in percent
            let padding = MAX_WIDTH * 9. / 16.; // 9/16 is aspect ratio

            html! {
                    <div style={format!("position: relative; padding-bottom: {:?}%; height: 0; max-width: {:?}%;", padding, MAX_WIDTH)}>
                        <iframe type="text/html" src={format!("https://www.youtube.com/embed/{}", youtube_embed)} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowfullscreen=true allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                            <p> {"video is unavailable"} </p>
                        </iframe>
                    </div>
            }
        }
        None => html!(), // if there is no youtube embed link, just don't have it
    };

    let github_link_html = match project.github_link {
        Some(github_link) => html! {
            <p> {"The source code for this project can be found on "} <a href={github_link}>{"GitHub"}</a> {"."} </p>
        },
        None => html!(), // if there is no github link, just don't have it
    };

    let categories_html = {
        let categories_links_listed_html: Html = project
            .categories
            .iter()
            .map(|category_name| html!(<li><a href={category::get_page_link_str(category_name)}>{category_name}</a></li>))
            .collect();

        html! {
            <>
                <p><a href="/category">{"Categories:"}</a></p>
                <ul>
                    {categories_links_listed_html}
                </ul>
            </>
        }
    };

    html! {
        <PageBase>
            <h1>{project.name}</h1>
            {video_html}
            {github_link_html}
            {categories_html}
        </PageBase>
    }
}

#[function_component]
pub fn ProjectRootPage() -> Html {
    let project_list = html! { <ProjectList project_list={Project::get_project_list()} /> };

    html! {
        <PageBase>
            <h1> {"Projects"} </h1>
            {project_list}
        </PageBase>
    }
}
