use yew::prelude::*;

use crate::project_data::Project;

#[derive(PartialEq, Properties)]
struct ProjectProperty {
    pub project: Project,
}
#[function_component]
fn ProjectItem(ProjectProperty { project }: &ProjectProperty) -> Html {
    gloo_console::debug!(project.get_page_link_str());
    html! {
        <div id={project.name.clone()} class="project">
            <h1> {project.name.clone()} </h1>
            <a href={project.get_page_link_str()}> {project.synopsis.clone()} </a>
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
