use crate::components::{footer::Footer, navbar::Navbar};
use yew::{html::ChildrenProps, prelude::*};

/// This is a bit of a special component.
/// All standard pages should have this as the outermost wrapper.
///
/// ## Usage:
///
/// ```rust
/// html! {
///     <PageBase>
///         <p> {"Inner page content"} </p>
///     </PageBase>
/// }
/// ```
///
#[function_component]
pub fn PageBase(ChildrenProps { children }: &ChildrenProps) -> Html {
    html! {
        <>
            <Navbar/>

            <div id="main">
                { children.clone() }
            </div>

            <Footer/>
        </>
    }
}
