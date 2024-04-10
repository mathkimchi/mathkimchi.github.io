use gloo_console::log;
use yew::prelude::*;

#[function_component]
pub fn Navbar() -> Html {
    let settings = {
        let dark_toggle = |_| {
            log!("Sorry, dark toggle is not working right now.");
        };

        html! {
            <li class="dropdown">
                <a class="dropbtn"> {"Settings"} </a> // need <a> just for css
                <div class="dropdown-content">
                    <a onclick={dark_toggle}>{"Toggle Dark"}</a>
                </div>
            </li>
        }
    };

    html! {
        <ul class="navbar">
            <li> <a href="/"> {"Home"} </a> </li>
            <li> <a href="/project"> {"Projects"} </a> </li>
            <li> <a href="/category"> {"Categories"} </a> </li>
            {settings}
        </ul>
    }
}
