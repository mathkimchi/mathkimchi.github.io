# Math Kimchi Home Page

## Plan

Check means I did the bare minimum

- [ ] Basic Pages:
  - [X] Router (not a page, but is the glue)
  - [X] Home page
    - Main purpose of this entire repository.
    - [X] Hero
    - [X] List best projects
    - [ ] Extra links
      - like github, youtube channel
  - [X] Pages for each video/project
    - [X] Don't hard code each, either use JSON or get data from youtube and github directly
    - [ ] Display its categories
  - [ ] Categories Page
    - [ ] One listing all categories
      - Maybe make them heirarchical
      - Let the subcategories fold on click and also unfold to show individual projects
    - [ ] Also a page for each individual category
      - Display the projects in those categories
      - Display related categories
  - [ ] Navigation page
- [ ] Universal Components
  - [X] Navbar
  - [ ] Search (should also have a page)
  - [ ] Socials link and contact form
  - [ ] Footer
    - Explain this site was made with rust and yew.
    - Point is to say that I wrote it myself without being too blatant about it.
- [ ] Improve UX (TBH, I just wrote this because it sounds important)
  - Think of customer journey
- [ ] Make it look cool
  - [ ] css colors
  - [ ] Animations?
  - [ ] darkmode/lightmode button
  - [ ] Reactive css to support phones
- [ ] Have this also run on mathkimchi.org
  - [ ] Having a custom email domain as well would be pretty sick
- [ ] Store visitor analytics
  - maybe this is lame
- [ ] Blogs?
  - Could be a less official alternative for mathkimchi videos.

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

### 2024/3/17 Alternative Data Storage

I am weighing the pros and cons of having the data stored with the website (like now), vs having the data stored seperately.

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

I am going to look into trunk hooks, because it might let me replace build.rs.

I think it will let me automatically run a command at many stages of `trunk build`, and the important one for me is post build.

```toml
[[hooks]]
stage = "post_build"
command = "make"
command_arguments = ["trunk_post_build"]
```

Where I also added trunk_post_build to my makefile.

I don't think it works.
Apparently, after finishing the hook, it applies a new distribution, which idk the meaning of, but I am pretty sure this cancels out the changes to the /docs directory.
So, it is useless for my purposes.

I could set up my own version of `trunk watch` with the cargo watch crate, and maybe add `trunk serve` functionality through python https, but I am not going to do that.

In conclusion, I'm going to stick with a build.rs for now.

### 2024/3/18 Individual Project Pages

I am going to generate the project pages based on the project JSON.

My current goal is just to get the router to work.

A project named "Project Name" will be found at `/project/project-name`.
In other words, I am going to turn the project name into kebab case (lowercase, hyphen instead of space) and append it to the end of `/project/`.
I might not want to do this, because it might be better for links to be like: `/project/cs/webdev/really-cool-website`, but I will cross that bridge when I get to it.

Well, I think the rust replace function for strings uses regex, and I don't know how to represent a single space literal in regex so it is not working.
Actually, my original code of `" "` was right, but clippy was being annoying about it.
I changed it to a char, `' '` and that satisfied clippy.
I think this change was actually good, but I am just writing it down for no reason.

2024/3/22 Continued...

Youtube doesn't allow for video linking without a public domain.

I don't think I can fix this on localhost, but maybe it works on git pages.
I'm going to commit and see what happens.

### 2024/3/22 Cleaning

For some reason, it took 3 and a half minutes to build and deploy onto gh pages, when it ususually takes less than 1.

However, the videos do show up on gh pages.

Before I start adding actual data, I am going to do clean up, aka making it look good.

- [ ] Navbar
  - [ ] Navbar for all pages
  - [ ] Actual navbar links
- [ ] 404 Page
  - [ ] Main feature is it allows going back to the homepage

2024/3/24 continued

The Navbar only has the homepage, but that is really the only important page I have right now.

I deleted the example pages and all the pages have a navbar.

For the 404 page, I changed the message and just added a navbar so people can go back.

Idk, I think I can add my real projects now.

Here is the todo list from the very beginning, the check means I have done the bare minimum for that feature.

- [ ] Basic Pages:
  - [X] Router (not a page, but is the glue)
  - [X] Home page
    - Main purpose of this entire repository.
  - [X] Pages for each video/project
    - [X] Don't hard code each, either use JSON or get data from youtube and github directly
  - [ ] Pages for each topic
  - [ ] Navigation page
- [ ] Universal Components
  - [X] Navbar
  - [ ] Search
  - [ ] Socials link and contact form
- [ ] Improve UX (TBH, I just wrote this because it sounds important)
  - Think of customer journey
- [ ] Make it look cool
  - [ ] css colors
  - [ ] Animations?
  - [ ] darkmode/lightmode button
- [ ] Have this also run on mathkimchi.org
  - [ ] Having a custom email domain as well would be pretty sick
- [ ] Store visitor analytics
  - maybe this is lame

### 2024/3/24 Adding Real Projects

I will add my actual projects to the json now.

Later, I should have a way to differentiate the best projects from the rest, because I don't want to clutter the homepage.
For now, I am just adding my best/favorite projects to the json.

Also, idk if I already said this, but the build.rs trick to save the json only updates if you do `cargo clean`.

I just went over my github and youtube channel and picked my favorites.

I realized that jsonl is json but with comments and extra commas.
I hope that serde supports jsonl.

Serde doesn't, so I'm just going to use normal json.

I wanted the videos to look bigger, so I followed: <https://help.viostream.com/frequently-asked-questions/how-do-i-make-an-iframe-embed-responsive/>.

I added an optional github link.
I also realized, I can split up the html into smaller chunks inside a single function through variables, without needing to make an entire functional or structural component in yew.
It is pretty obvious, but I never thought of doing that.

I think my site is finally at a bare minimum stage of being usable right now.
It is still very ugly and I still have many more features I want to add, but it is getting somewhere.

### 2024/3/24 Squarespace Experiment Gone Wrong

I was experimenting with allowing this to run on a squarespace domain, but it didn't work, so I removed it in the settings.
However, when I went on `mathkimchi.github.io`, it kept redirecting me to `mathkimchi.org`, the squarespace domain.
I thought I might've needed to redeploy, so I disabled ghpages then enabled it again, but it didn't work.
So, I went on the ghpage on incognito, and it did not redirect me.
In the end, I realized that Firefox was being weird, not github or squarespace.
I just needed to clear my cookies and it is working again.
But, I had a mini heartattack because I need to work on my homework right now and I thought I would need to do a drastic fix.

### 2024/3/29 Project Categories

I am going to add project categories to allow for better organization.

When I say category, I really mean tags, as one project can have any number of categories.

The categories I will have are:

- Best (for listing on the home page)
- Math
- Coding
  - Fractal (under coding because it is focused on rendering)
  - Simulation
    - Physics Simulation
    - Behavioral Simulation
  - Game Development
  - Game Bot
- Musical Performance

These will be title case with spaces allowed when represented in JSON, simply because that is what I did for the names. Similarly, I will be converting to kebab case for the url.

TODO: look into Enums for the categories.

Also, I will be refactoring the entire "cs-projects-list.json" format. Here are the changes I will make now to clean up before actually implementing the code:

- [x] Renamed "cs-projects-list.json" to "projects.json"
- [x] Move mod cs_project_list into its own file called project_data.rs
- [x] Instead of being a list of projects, it is { "category_list": [...], "project_list": [main file before] }
- [x] Removed Option\<Images\> from code, as it was not being used. Will probably add this back later
- [x] Rename "description" key to "synopsis" to signify that it is supposed to be very short, and should be able to be read instantly. I will probably add longer descriptions as well, to go on the individual pages.
- [x] Rename all the ones like cs project to just project
- [x] Delete res/example.txt

I am also considering using the project name as a key. Actually, I realized that that would be annoying for several reasons.

Okay, this all seems to be working.

Now, I will actually add functionality to the categories. I am just going to add a few categories, and I will add actual data later.

I will add a generated page for each category, ex,  `/category/game-development`.
The code for listing the projects in a category was pretty much just the code for listing the good projects in the homepage so I made it its new component.

I also made a root categories page which lists all categories.
