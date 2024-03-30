use yew::Renderer;

mod components;
mod pages;
mod project_data;
mod root;

pub fn main() {
    Renderer::<root::Root>::new().render();
}
