use crate::{
    components::{navbar::Navbar, project_list_html::ProjectList},
    project_data::Project,
};
use yew::prelude::*;

#[function_component]
fn Hero() -> Html {
    // it is easier for me to develop live when I don't link locally

    // html!(<div id="hero" style="background-image: url('/res/buddhabrot.png'); background-repeat: no-repeat; background-size: cover;"> <span class="vertcenter" id="heroText"><h1 class="horcenter" style="font-size: 5vw; position: absolute; bottom: -250%;">{"Alvin Kim"}</h1><br/><p class="horcenter" style="color: gray; position: absolute; top: 0%;">{"i like coding"}</p></span> </div>)
    html!(<div id="hero" style="background-image: url('https://github.com/mathkimchi/Fractals/blob/main/Buddhabrot/outputs/buddhabrot/transposed/transposed.png?raw=true'); background-repeat: no-repeat; background-size: cover;"> <span class="vertcenter" id="heroText"><h1 class="horcenter" style="font-size: 5vw; position: absolute; bottom: -250%;">{"Alvin Kim"}</h1><br/><p class="horcenter" style="color: gray; position: absolute; top: 0%;">{"i like coding"}</p></span> </div>)
}

// #[derive(PartialEq, Properties)]
// struct ProjectProperty {
//     pub project: Project,
// }

// #[function_component]
// fn ProjectItem(ProjectProperty { project }: &ProjectProperty) -> Html {
//     gloo_console::debug!(project.get_page_link_str());
//     html! {
//         <div id={project.name.clone()} class="project">
//             <h1> {project.name.clone()} </h1>
//             <a href={project.get_page_link_str()}> {project.synopsis.clone()} </a>
//         </div>
//     }
// }

// #[function_component]
// fn ProjectsList() -> Html {
//     // html! {
//     //     <p>{"Projects: project"}</p>
//     // }

//     Project::get_project_list()
//         .into_iter()
//         .map(|project| {
//             html! {
//                 <ProjectItem {project}></ProjectItem>
//             }
//         })
//         .collect()
// }

#[function_component]
pub fn HomePage() -> Html {
    let socials = html! {
        <>
            <h2>{"Socials:"}</h2>
            <a href={"https://github.com/mathkimchi"} style="padding: 5px;">
                <img src="https://github.githubassets.com/favicons/favicon-dark.png" style="width: 30px; height: 30px;"/>
                // {"mathkimchi"} // name is redundant?
            </a>
            <a href={"https://www.youtube.com/@mathkimchi"} style="padding: 5px;">
                <img src="https://www.youtube.com/s/desktop/accca349/img/favicon.ico" style="width: 30px; height: 30px;"/>
            </a>
        </>
    };

    html! {
        <>
            <Navbar/>
            <Hero/>
            <hr/>
            <h1>{"Best Projects:"}</h1>
            <ProjectList project_list={Project::get_projects_with_category(&"best".to_string())}/>
            <hr/>
            {socials}
        </>
    }
}
