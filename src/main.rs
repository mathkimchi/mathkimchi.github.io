use app::App;
use yew::Renderer;

mod app;
include!(concat!(env!("OUT_DIR"), "/content.rs"));

pub fn main() {
    Renderer::<App>::new().render();
}

pub fn print_file_contents() {
    println!("String: {FILE_CONTENTS}");
}
