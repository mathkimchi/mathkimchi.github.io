use std::path::Path;
use std::{env, fs};

const PROJECTS_JSON_PATH: &str = "res/projects.json";

fn save_projects_data() -> Result<(), std::io::Error> {
    let out_dir = env::var_os("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("projects_data.rs");

    let content_string = fs::read_to_string(PROJECTS_JSON_PATH).expect("Could not read projects");

    fs::write(
        dest_path,
        format!(r##"pub const PROJECTS_DATA_STR: &str = r#"{content_string}"#;"##),
    )?;

    println!("cargo:rerun-if-changed=build.rs");

    Ok(())
}

fn main() -> Result<(), std::io::Error> {
    save_projects_data()?;

    Ok(())
}
