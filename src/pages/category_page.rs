use crate::{
    components::{page_base::PageBase, project_list_html::ProjectList},
    project_data::{category, Project},
};
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct CategoryPageProperty {
    pub category_kebab_name: String,
}
#[function_component]
pub fn CategoryPage(
    CategoryPageProperty {
        category_kebab_name,
    }: &CategoryPageProperty,
) -> Html {
    if !category::category_map_by_kebab().contains_key(category_kebab_name) {
        return html! {
            <PageBase>
                <p>{"The category \""} {category_kebab_name} {"\" does not exist."}</p>
                <p>{"Check your url for typos or go to the "} <a href="/"> {"main page"} </a> {"."}</p>
            </PageBase>
        };
    }

    let project_list = html! { <ProjectList project_list={Project::get_projects_with_category(category_kebab_name)} /> };

    html! {
        <PageBase>
            <h1>{format!("Category: {}", category::category_map_by_kebab().get(category_kebab_name).unwrap())}</h1>
            {project_list}
        </PageBase>
    }
}

#[function_component]
pub fn CategoryRootPage() -> Html {
    let category_list: Html = category::get_category_list()
        .into_iter()
        .map(|category_kebab_name| html! {<li> <a href={category::get_page_link_str(&category_kebab_name)}>{category_kebab_name}</a> </li>})
        .collect();

    html! {
        <PageBase>
            <h1> {"Categories"} </h1>
            <ul>
                {category_list}
            </ul>
        </PageBase>
    }
}
