use yew::prelude::*;

use crate::project_data::{category, Project};

#[derive(PartialEq, Properties)]
struct ProjectProperty {
    pub project: Project,
}
#[function_component]
fn ProjectItem(ProjectProperty { project }: &ProjectProperty) -> Html {
    gloo_console::debug!(project.get_page_link_str());

    let categories_list_html: Html = project
        .categories
        .iter()
        .map(|category_name| html!(<><a href={category::get_page_link_str(category_name)}>{category_name}</a>{" "}</>))
        .collect();

    html! {
        <div id={project.get_kebab_name().clone()} class="project-item">
            <a href={project.get_page_link_str()} >
                <h1> {project.name.clone()} </h1>
                <p>{project.synopsis.clone()}</p>
                <p>{"Categories: "}{categories_list_html}</p>
            </a>
        </div>
    }
}

#[derive(PartialEq, Properties)]
pub struct ProjectListProperty {
    pub project_list: Vec<Project>,
}
#[function_component]
pub fn ProjectList(ProjectListProperty { project_list }: &ProjectListProperty) -> Html {
    project_list
        .iter()
        .map(|project| {
            html! {
                <ProjectItem project={project.clone()}></ProjectItem>
            }
        })
        .collect()
}
