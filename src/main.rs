use yew::Renderer;

mod pages;
mod root;

pub fn main() {
    Renderer::<root::Root>::new().render();
}
