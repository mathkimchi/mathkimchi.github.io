use yew::prelude::*;

#[function_component]
pub fn Navbar() -> Html {
    html! {
        <ul class="navbar">
            <li> <a> {"Nav bar item"} </a> </li>
        </ul>
    }
}
