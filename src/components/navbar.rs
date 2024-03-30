use yew::prelude::*;

#[function_component]
pub fn Navbar() -> Html {
    html! {
        <ul class="navbar">
            <li> <a href="/"> {"Home"} </a> </li>
            <li> <a href="/project"> {"Projects"} </a> </li>
            <li> <a href="/category"> {"Categories"} </a> </li>
        </ul>
    }
}
