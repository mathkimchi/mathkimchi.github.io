use serde::{Deserialize, Serialize};
use std::collections::HashMap;

// include!(concat!(env!("OUT_DIR"), "/projects_data.rs"));

#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
pub struct ProjectData {
    category_list: Vec<String>,
    project_list: Vec<Project>,
}
impl ProjectData {
    pub fn new() -> ProjectData {
        use gloo_console::log;

        let PROJECTS_DATA_STR = todo!();

        log!(PROJECTS_DATA_STR);

        serde_json::from_str(PROJECTS_DATA_STR).expect("Parse project data str")
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
pub struct Project {
    pub name: String,
    pub youtube_embed: String,
    pub synopsis: String,
    pub github_link: Option<String>,
    pub categories: Vec<String>,
}
impl Project {
    pub fn get_project_list() -> Vec<Self> {
        ProjectData::new().project_list
    }

    pub fn get_page_link_str(&self) -> String {
        format!("/project/{}", self.name.to_kebab_case())
    }

    fn has_category(&self, category_name: &String) -> bool {
        self.categories
            .iter()
            .any(|other| other.to_kebab_case() == category_name.to_kebab_case())
    }

    pub fn project_map_by_kebab() -> HashMap<String, Self> {
        HashMap::from_iter(
            Self::get_project_list()
                .into_iter()
                .map(|project| (project.name.to_kebab_case(), project)),
        )
    }

    pub fn get_projects_with_category(category_name: &String) -> Vec<Self> {
        let mut filtered_list = Self::get_project_list();
        filtered_list.retain(|project| project.has_category(category_name));
        filtered_list
    }
}

pub mod category {
    use super::*;

    pub fn get_category_list() -> Vec<String> {
        ProjectData::new().category_list
    }

    pub fn get_page_link_str(category_name: &String) -> String {
        format!("/category/{}", category_name.to_kebab_case())
    }

    pub fn category_map_by_kebab() -> HashMap<String, String> {
        HashMap::from_iter(
            get_category_list()
                .into_iter()
                .map(|category| (category.to_kebab_case(), category)),
        )
    }
}

// putting this at bottom because it can be seperated
trait ToKebabCase {
    fn to_kebab_case(&self) -> Self;
}
impl ToKebabCase for String {
    fn to_kebab_case(&self) -> Self {
        self.to_lowercase().replace(' ', "-")
    }
}
