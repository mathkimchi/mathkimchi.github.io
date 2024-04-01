use crate::{components::navbar::Navbar, pages::*};
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Clone, Routable, PartialEq, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/project")]
    ProjectRoot,
    #[at("/project/*project_kebab_name")]
    Project { project_kebab_name: String },
    #[at("/category")]
    CategoryRoot,
    #[at("/category/*category_kebab_name")]
    Category { category_kebab_name: String },
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <home_page::HomePage/> },
        Route::ProjectRoot => html! { <project_page::ProjectRootPage/> },
        Route::Project { project_kebab_name } => {
            html! { <project_page::ProjectPage {project_kebab_name} /> }
        }
        Route::CategoryRoot => html! { <category_page::CategoryRootPage/> },
        Route::Category {
            category_kebab_name,
        } => {
            html! { <category_page::CategoryPage {category_kebab_name} /> }
        }
        Route::NotFound => {
            html! { <> <Navbar /> <h1>{ "404" }</h1> <p>{"Page not found."}</p> <p>{"Check your url for typos or go to the "} <a href="/"> {"main page"} </a> {"."} </p> </> }
        }
    }
}

#[function_component]
pub fn Root() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}
