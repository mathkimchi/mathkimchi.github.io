use yew::Renderer;

mod components;
mod pages;
mod root;

pub mod cs_project_list {
    use serde::{Deserialize, Serialize};
    use serde_json;
    use std::collections::HashMap;

    include!(concat!(env!("OUT_DIR"), "/cs_project_list.rs"));

    #[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
    pub struct CsProject {
        pub name: String,
        pub youtube_embed: String,
        pub image: String,
        pub description: String,
    }

    impl CsProject {
        pub fn get_kebab_name(&self) -> String {
            // idk regex so this might break
            self.name.to_lowercase().replace(' ', "-")
        }

        pub fn get_page_link_str(&self) -> String {
            format!("/project/{}", self.get_kebab_name())
        }
    }

    pub fn parse_cs_project_list() -> Vec<CsProject> {
        use gloo_console::log;

        log!(CS_PROJECT_LIST_STR);

        serde_json::from_str(CS_PROJECT_LIST_STR)
            .expect("parse cs project list str to vector of projects")
    }

    pub fn cs_project_map_by_kebab() -> HashMap<String, CsProject> {
        // parse_cs_project_list()
        //     .into_iter()
        //     .map(|cs_project| (cs_project.get_kebab_name(), cs_project))
        //     .collect()

        HashMap::from_iter(
            parse_cs_project_list()
                .into_iter()
                .map(|cs_project| (cs_project.get_kebab_name(), cs_project)),
        )
    }
}
pub fn main() {
    Renderer::<root::Root>::new().render();
}
