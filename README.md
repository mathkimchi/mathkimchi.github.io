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
- [ ] Universal Components
  - [ ] Navbar
  - [ ] Search
  - [ ] Socials link and contact form
- [ ] Improve UX (TBH, I just wrote this because it sounds important)
  - [ ] Think of customer journey
- [ ] Make it look cool
  - [ ] css colors
  - [ ] Animations?
- [ ] Have this also run on mathkimchi.org
  - [ ] Having a custom email domain would be pretty sick

### Router

The idea is to have a Root component, and everything is inside the Root component, no matter what page it is.

I am going to put a Router inside of Root to load different sub content inside of the Root component, depending on the url.

I did this for my other yew projects, so it should be pretty straight forword this time.

I got it working on my system, now I'll have to see if it actually works or not (and also remember to check the favicon, because that wasn't working on my system).

Well, the favicon didn't work but it hopefully works now because I changed the destination of it.

But, the router seems to be working so thats good.

### Home Page

I've never made a website that was supposed to be used by others, but I have been doing some research into webdev.

The plan is, the bare bones of the homepage is going to be a list of projects I have done, along with a description of my YT channel and who I am.
But, I should make that look not ugly by adding images and putting a lot of spaces.

By the way, this is site supposed to be a page for me as a coder for the most part.
A cool concept might be to have seperate pages for different aspects of my life, like coding, music, youtube, etc...
But, I am going to assume that most of the people visiting my website will want to connect with me professionally, so the first/biggest thing they see should be about my coding.

The first thing users will see is called the hero section. For that, I want to add a big image background that spans the entire width but is focused on one half of the page, and the other half will be some text.
I kind of want to make this an interactive demo, but I am not going to do that now.

As a placeholder I am going to write: "Alvin Kim" and under that: "i like coding".
Until I find a cool image of myself, I am going to use the buddhabrot as the background.

Below that, I want to list my projects.
Maybe rows of 4 boxes. Maybe one project per row and that is split into the image side and the description side.

I'm going to make elements like the navbar each page's responsibility because of some css reasons.

Sidenote: In ghPages, I can set the favicon by simply having it be favicon.ico inside docs (or the root directory).
I don't need to set it with css.
However, if I ever upload this side onto something else, idk if that would be compatible.

Anyways, I think I will just make my site look kind of ugly for now and do the css to make it look good later (which is to say never).

I expected quotations within the saved files to mess with the build rs, and I was right.
I have made cs-projects-list.json and I want to save its contents as a string to a generated rust file. I am going to assume there will be no hashtags in cs-projects-list.json that might break this, and I am going to wrap the string an extra layer of hashtags.

I am going to start using results and ? in rust.

I am using serde to parse the JSON.

Sometimes, when doing `make watch`, the build.rs doesn't update the data, so I did `cargo clean` and watched again.

I have a proof-of-concept homepage with generated projects, so I am going to commit.

I am also weighing the pros and cons of having the data stored with the website (like now), vs having the data stored seperately.

- Stored via build.rs
  - Pros
    - I already implemented this
    - Makes intuitive sense
    - Relatively simple setup
    - Seems fast (on my system, might need to get back on this)
    - Works well with live development
  - Cons
    - Not as flexible
    - The build.rs thing is kind of janky
- Directly get it from docs/res/cs-projects-list.json
  - I am currently doing the images this way
  - Pros
    - I feel like this is the most common way, especially for people not using yew
    - Probably the fastest way
  - Cons
    - This is going to be hard to develop live, at least with my current workflow (using `trunk serve`)
- Stored on a different github repo or entirely different website
  - Pros
    - Allows me to change the data without changing the website's source code repository
  - Cons
    - Possibly slow speed
    - Possibly complicated to set up
- Gathered from YouTube
  - I'm not going to do this as a replacement for the other options because projects and videos are not 1 to 1
  - Could be useful for a seperate feature
