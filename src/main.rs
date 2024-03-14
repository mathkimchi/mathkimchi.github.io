use app::App;
use yew::Renderer;

mod app;

// fn main() {
//     Renderer::<App>::new().render();
// }

include!(concat!(env!("OUT_DIR"), "/content.rs"));

fn main() {
    println!("String: {FILE_CONTENTS}");
}
