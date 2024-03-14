use crate::FILE_CONTENTS;
use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <main>
            <h1>{ "Hello World!" }</h1>
            <p>{ FILE_CONTENTS }</p>
        </main>
    }
}
