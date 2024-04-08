use gloo_console::log;
use gloo_net::http::Request;
use serde::Deserialize;
use std::collections::HashMap;
use yew::{prelude::*, Renderer};

pub fn main() {
    // let request_url = "https://fir-demo-31f6c-default-rtdb.firebaseio.com/".to_string();
    // println!("{}", request_url);
    // let response = reqwest::get(&request_url).await?;

    // println!("Got response {:?}", response);
    // println!("Status {:?}", response.status());

    // // let users: Vec<User> = response.json().await?;
    // let users: HashMap<String, String> = response.json().await?;
    // println!("Users: {:?}", users);
    // Ok(())

    Renderer::<App>::new().render();
}

#[function_component]
pub fn App() -> Html {
    // let videos = use_state(|| vec![]);
    {
        // let videos = videos.clone();
        use_effect_with((), move |_| {
            // let videos = videos.clone();
            wasm_bindgen_futures::spawn_local(async move {
                let fetched_videos =
                    Request::get("https://api.github.com/repos/mathkimchi/mathkimchi.github.io/contents/projects.json?ref=resources")
                        .send()
                        .await
                        // .unwrap()
                        // .json()
                        // .await
                        .unwrap();
                log!(format!("{:?}", fetched_videos));
            });
            || ()
        });
    }

    // let users: Vec<User> = response.json().await?;
    // let users: HashMap<String, String> = response.json().await?;
    // println!("Users: {:?}", users);
    // Ok(())

    html!()
}
