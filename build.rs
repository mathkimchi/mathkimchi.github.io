use std::path::Path;
use std::{env, fs};

fn save_contents() {
    let out_dir = env::var_os("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("content.rs");

    let content_string = fs::read_to_string("example.txt").expect("Could not read string");

    fs::write(
        dest_path,
        format!(r#"pub const FILE_CONTENTS: &str = "{content_string}";"#),
    )
    .unwrap();
}

fn main() {
    save_contents();
}
