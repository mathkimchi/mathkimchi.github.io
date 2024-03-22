use crate::pages::*;
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Clone, Routable, PartialEq, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/example0")]
    Example0,
    #[at("/example1")]
    Example1,
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
        Route::Example0 => html! { <h1> {"This is Example 0"} </h1> },
        Route::Example1 => html! { <h1> {"This is Example 1"} </h1> },
        Route::ProjectMain => html! { <h1> {"This is Project Main"} </h1> },
        Route::Project { project_name } => {
            html! { <project::ProjectPage {project_name} /> }
        }
        Route::NotFound => html! { <h1>{ "404" }</h1> },
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
