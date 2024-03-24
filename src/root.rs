use crate::{components::navbar::Navbar, pages::*};
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Clone, Routable, PartialEq, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/project")]
    ProjectMain,
    #[at("/project/*project_name")]
    Project { project_name: String },
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <home::HomePage/> },
        Route::ProjectMain => html! { <> <Navbar /> <h1> {"This is Project Main"} </h1> </> },
        Route::Project { project_name } => {
            html! { <project::ProjectPage {project_name} /> }
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
