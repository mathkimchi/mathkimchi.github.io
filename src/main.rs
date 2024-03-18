use yew::Renderer;

mod components;
mod pages;
mod root;

pub mod cs_project_list {
    use serde::{Deserialize, Serialize};
    use serde_json;

    include!(concat!(env!("OUT_DIR"), "/cs_project_list.rs"));

    #[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
    pub struct CsProject {
        pub name: String,
        pub page_link: String,
        pub youtube_link: String,
        pub image: String,
        pub description: String,
    }

    pub fn parse_cs_project_list() -> Vec<CsProject> {
        use gloo_console::log;

        log!(CS_PROJECT_LIST_STR);

        serde_json::from_str(CS_PROJECT_LIST_STR)
            .expect("parse cs project list str to vector of projects")
    }
}
pub fn main() {
    Renderer::<root::Root>::new().render();
}
