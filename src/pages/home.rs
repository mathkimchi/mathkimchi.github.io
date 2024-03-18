use crate::{
    components::navbar::Navbar,
    cs_project_list::{self, CsProject},
};
use yew::prelude::*;

#[function_component]
fn Hero() -> Html {
    // it is easier for me to develop live when I don't link locally

    // html!(<div id="hero" style="background-image: url('/res/buddhabrot.png'); background-repeat: no-repeat; background-size: cover;"> <span class="vertcenter" id="heroText"><h1 class="horcenter" style="font-size: 5vw; position: absolute; bottom: -250%;">{"Alvin Kim"}</h1><br/><p class="horcenter" style="color: gray; position: absolute; top: 0%;">{"i like coding"}</p></span> </div>)
    html!(<div id="hero" style="background-image: url('https://github.com/mathkimchi/Fractals/blob/main/Buddhabrot/outputs/buddhabrot/transposed/transposed.png?raw=true'); background-repeat: no-repeat; background-size: cover;"> <span class="vertcenter" id="heroText"><h1 class="horcenter" style="font-size: 5vw; position: absolute; bottom: -250%;">{"Alvin Kim"}</h1><br/><p class="horcenter" style="color: gray; position: absolute; top: 0%;">{"i like coding"}</p></span> </div>)
}

#[derive(PartialEq, Properties)]
struct ProjectProperty {
    pub cs_project: CsProject,
}

#[function_component]
fn Project(ProjectProperty { cs_project }: &ProjectProperty) -> Html {
    html! {
        <div id={cs_project.name.clone()} class="csproject">
            <h1> {cs_project.name.clone()} </h1>
            <a href={cs_project.page_link.clone()}> {cs_project.description.clone()} </a>
        </div>
        // {format!("{:?}", property.cs_project)}
    }
}

#[function_component]
fn ProjectsList() -> Html {
    // html! {
    //     <p>{"Projects: project"}</p>
    // }

    cs_project_list::parse_cs_project_list()
        .into_iter()
        .map(|cs_project| {
            html! {
                <Project {cs_project}></Project>
            }
        })
        .collect()
}

#[function_component]
pub fn Home() -> Html {
    html! {
        <>
            <span style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
                <Hero/>
                <ProjectsList/>
            </span>
            <Navbar/>
        </>
    }
}
