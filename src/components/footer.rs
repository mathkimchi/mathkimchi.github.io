use yew::prelude::*;

#[function_component]
pub fn Footer() -> Html {
    let socials = html! {
        <>
            <span style="padding-right: 5px;">{"Socials:"}</span>
            <a href={"https://github.com/mathkimchi"} style="padding: 5px;">
                <img src="https://github.githubassets.com/favicons/favicon-dark.png" style="width: 30px; height: 30px; vertical-align: middle;"/>
                // {"mathkimchi"} // name is redundant?
            </a>
            <a href={"https://www.youtube.com/@mathkimchi"} style="padding: 5px;">
                <img src="https://www.youtube.com/s/desktop/accca349/img/favicon.ico" style="width: 30px; height: 30px; vertical-align: middle;"/>
            </a>
        </>
    };

    html! {
        <footer class="footer">
            <img src="/mathkimchi.jpg" style="padding: 10px; width: 30px; height: 40px; vertical-align: middle;" />
            // <a href="https://github.com/mathkimchi/mathkimchi.github.io" style="color: var(--text); text-decoration: none; font-weight: bold;"> {"Made with Yew by Alvin Kim Lyuh"} </a>
            <a href="https://github.com/mathkimchi/mathkimchi.github.io" style="color: var(--text);"> {"Made with Yew by Alvin Kim Lyuh"} </a>
            <span style="padding: 10px;"> {"|"} </span>
            {socials}
        </footer>
    }
}
