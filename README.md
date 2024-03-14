# Math Kimchi Home Page

## Devlog

### Setup

When I tried using Yew last time and tried to access a json file in the browser, I got an error because the script was being run in the browser.
So, I decided to figure out build.rs, which allows me to run scripts when building, where I have access to the files.

I got build.rs to generate a new rust file based off example.txt, so that when the binaries are run, it does not need example.txt itself to use its contents.

The problem now is that with Yew, `cargo build` isn't how you actually build the project.
Previously, I've been using `trunk build` with some extra arguments but after some research, wasm-pack seems like it might be easier to use with build.rs.

So I did `cargo install wasm-pack` to get it.
`wasm-pack build` gave me an error so I ran `rustup target add wasm32-unknown-unknown` and `wasm-pack build` still gave me an error.
I am following [this tutorial](https://dev.to/davidedelpapa/yew-tutorial-06-custom-custom-custom-4ml3) and it seems like I need to make my project a library as well as add some lines to Cargo.toml to run `wasm-pack build`.

Actually, I just realized that I don't actually need to run wasm-pack or trunk's build from my build.rs. In fact, it would create an infinite loop because both of their builds call build.rs.
I think I just need to call `trunk build` on the top level, and that should run build.rs.

Yeah, I got it to display the example text on a website.

Now, I want to make sure that everything will deploy correctly on GitHub Pages.

I also made a Makefile for convenience but idk if I did it correct.

Ok, after a few tries, it GH pages to work.

I added a favicon but I don't actually know if it is going to work or not.

Now, time to make the actual website.
The general plan for now is:

- [ ] Basic Pages:
  - [ ] Router (not a page, but is the glue)
  - [ ] Home page
    - [ ] Main purpose
  - [ ] Pages for each video/project
    - [ ] Don't hard code each, either use JSON or get data from youtube and github directly
  - [ ] Pages for each topic
  - [ ] Navigation page
- [ ] Universal Elements
  - [ ] Navbar
  - [ ] Search
  - [ ] Socials link and contact form
- [ ] Improve UX (TBH, I just wrote this because it sounds important)
  - [ ] Think of customer journey
- [ ] Make it look cool
  - [ ] css colors
  - [ ] Animations?
- [ ] Have this also run on mathkimchi.org

### Router

The idea is to have a Root component, and everything is inside the Root component, no matter what page it is.

I am going to put a Router inside of Root to load different sub content inside of the Root component, depending on the url.

I did this for my other yew projects, so it should be pretty straight forword this time.

I got it working on my system, now I'll have to see if it actually works or not (and also remember to check the favicon, because that wasn't working on my system).
