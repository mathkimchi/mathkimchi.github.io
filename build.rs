use std::path::Path;
use std::{env, fs};

const CS_PROJECT_LIST_PATH: &str = "res/cs-projects-list.json";

fn save_cs_project_list() -> Result<(), std::io::Error> {
    let out_dir = env::var_os("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("cs_project_list.rs");

    let content_string =
        fs::read_to_string(CS_PROJECT_LIST_PATH).expect("Could not read cs projects");

    fs::write(
        dest_path,
        format!(r##"pub const CS_PROJECT_LIST_STR: &str = r#"{content_string}"#;"##),
    )?;

    println!("cargo:rerun-if-changed=build.rs");

    Ok(())
}

fn main() -> Result<(), std::io::Error> {
    save_cs_project_list()?;

    Ok(())
}
