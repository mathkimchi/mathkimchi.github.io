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
    #[at("/generic")]
    GenericMain,
    #[at("/generic/*extra")]
    GenericExtra { extra: String },
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <home::Home/> },
        Route::Example0 => html! { <h1> {"This is Example 0"} </h1> },
        Route::Example1 => html! { <h1> {"This is Example 1"} </h1> },
        Route::GenericMain => html! { <h1> {"This is Generic Main"} </h1> },
        Route::GenericExtra { extra } => {
            html! { <h1> {format!("This is Generic with extra: {extra}")} </h1> }
        }
        Route::NotFound => html! { <h1>{ "404" }</h1> },
    }
}

#[function_component]
pub fn Root() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} />
            <p> {"global element test"} </p>
        </BrowserRouter>
    }
}
