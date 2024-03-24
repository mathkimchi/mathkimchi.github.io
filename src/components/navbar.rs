use yew::prelude::*;

#[function_component]
pub fn Navbar() -> Html {
    html! {
        <ul class="navbar">
            <li> <a href="/"> {"Home"} </a> </li>
        </ul>
    }
}
