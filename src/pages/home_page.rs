use crate::{
    components::{page_base::PageBase, project_list_html::ProjectList},
    project_data::Project,
};
use yew::prelude::*;

#[function_component]
fn Hero() -> Html {
    // it is easier for me to develop live when I don't link locally

    // html!(<div id="hero" style="background-image: url('/res/buddhabrot.png'); background-repeat: no-repeat; background-size: cover;"> <span class="vertcenter" id="heroText"><h1 class="horcenter" style="font-size: 5vw; position: absolute; bottom: -250%;">{"Alvin Kim"}</h1><br/><p class="horcenter" style="color: gray; position: absolute; top: 0%;">{"i like coding"}</p></span> </div>)
    html! {
        <div id="hero" style="background-image: url('/buddhabrot.png'); background-repeat: no-repeat; background-size: cover;">
            <span class="vertcenter" id="heroText">
                <h1 class="horcenter" style="font-size: 5vw; position: absolute; bottom: -250%;">{"Alvin Kim"}</h1>
                // <br/>
                // <p class="horcenter" style="color: gray; position: absolute; top: 0%;">{"i like coding"}</p>
                // TODO: under my name, I want to have words like Coder, Mathematician, Singer, etc where each word can be clicked on to reveal my code portfolio & stuff
            </span>
        </div>
    }
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
    html! {
        <PageBase>
            <Hero/>
            <hr/>
            <h1>{"Best Projects:"}</h1>
            <ProjectList project_list={Project::get_projects_with_category(&"best".to_string())}/>
        </PageBase>
    }
}
