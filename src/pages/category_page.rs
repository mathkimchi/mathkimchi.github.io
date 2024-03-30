use yew::prelude::*;

use crate::{
    components::{navbar::Navbar, project_list_html::ProjectList},
    project_data::{category, Project},
};

#[derive(PartialEq, Properties)]
pub struct CategoryPageProperty {
    pub category_name: String,
}
#[function_component]
pub fn CategoryPage(CategoryPageProperty { category_name }: &CategoryPageProperty) -> Html {
    let project_list =
        html! { <ProjectList project_list={Project::get_projects_with_category(category_name)} /> };

    html! {
        <>
            <Navbar/>
            <h1>{format!("Category: {}", category_name)}</h1> // TODO: display the Title case spaced version
            {project_list}
        </>
    }
}

#[function_component]
pub fn CategoryRootPage() -> Html {
    let category_list: Html = category::get_category_list()
        .into_iter()
        .map(|category_name| html! {<li> <a href={category::get_page_link_str(&category_name)}>{category_name}</a> </li>})
        .collect();

    html! {
        <>
            <Navbar/>
            <ul>
                {category_list}
            </ul>
        </>
    }
}
