use yew::prelude::*;

use crate::{components::navbar::Navbar, cs_project_list};

#[derive(PartialEq, Properties)]
pub struct ProjectPageProperty {
    pub project_name: String,
}

#[function_component]
pub fn ProjectPage(ProjectPageProperty { project_name }: &ProjectPageProperty) -> Html {
    let project = cs_project_list::cs_project_map_by_kebab()
        .get(project_name)
        .unwrap()
        .clone();

    html! {
        <>
            <Navbar/>
            <iframe type="text/html" src={format!("https://www.youtube.com/embed/{}", project.youtube_embed)}>
                <p> {"video is unavailable"} </p>
            </iframe>
        </>
    }
}
