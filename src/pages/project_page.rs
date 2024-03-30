use yew::prelude::*;

use crate::{components::navbar::Navbar, project_data::Project};

#[derive(PartialEq, Properties)]
pub struct ProjectPageProperty {
    pub project_name: String,
}

#[function_component]
pub fn ProjectPage(ProjectPageProperty { project_name }: &ProjectPageProperty) -> Html {
    let project = Project::project_map_by_kebab()
        .get(project_name)
        .unwrap()
        .clone();

    let video_html = {
        const MAX_WIDTH: f64 = 80.; // already in percent
        let padding = MAX_WIDTH * 9. / 16.; // 9/16 is aspect ratio

        html! {
                <div style={format!("position: relative; padding-bottom: {:?}%; height: 0; max-width: {:?}%;", padding, MAX_WIDTH)}>
                    <iframe type="text/html" src={format!("https://www.youtube.com/embed/{}", project.youtube_embed)} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowfullscreen=true allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                        <p> {"video is unavailable"} </p>
                    </iframe>
                </div>
        }
    };

    let github_link_html = match project.github_link {
        Some(github_link) => html! {
            <p> {"The source code for this project can be found on "} <a href={github_link}>{"GitHub"}</a> {"."} </p>
        },
        None => html!(), // if there is no github link, just don't have it
    };

    html! {
        <>
            <Navbar/>
            {video_html}
            {github_link_html}
        </>
    }
}
