use yew::prelude::*;

#[function_component(Home)]
pub fn home() -> Html {
    html! {
        <main>
            <h1>{ "This is the homepage" }</h1>
            <p>{ "Hi" }</p>
        </main>
    }
}
