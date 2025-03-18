# Math Kimchi Home Page

## Plan

Check means I did the bare minimum

- [ ] Basic Pages:
  - [X] Router (not a page, but is the glue)
  - [X] Home page
    - Main purpose of this entire repository.
    - [X] Hero
    - [X] List best projects
    - [X] Extra links
      - like github, youtube channel
  - [X] Pages for each video/project
    - [X] Don't hard code each, either use JSON or get data from youtube and github directly
    - [ ] Display its categories
  - [X] Categories Page
    - [X] One listing all categories
      - Maybe make them heirarchical
      - Let the subcategories fold on click and also unfold to show individual projects
    - [X] Also a page for each individual category
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

### 2024/3/30 Adding More Data

I wish I had a scraping bot that could do this for me.

But, the title is self explanatory.
I will add all the data and see if it works.

Actually, I am going to make youtube embed optional as well.

I'm not going to list every gh repo.
I might add every video though, I'm not sure.

I added the videos.

The next things I should really do soon are:

- Adding links to gh and yt
- Project root
- Add a way to get pretty name from url name, will allow me to display the pretty names in the projects, as well as do other cool stuff.

### 2024/3/31 Cleaning

I am once again, just cleaning - that is to say, I am going to make a bunch of minor adjustments:

- [x] Handle error on bad project link
- [x] Adding links to gh and yt in homepage
  - I will put these in their proper places later when I add actual footers
- [x] Project root
- [x] Display pretty name in project pages
  - [x] Add a way to get pretty name from url name

In order to add the socials, I had to do revert some of the old css I did, which is a small bummer but I have given up on making this look good a long time ago.
But, I learned about the \<hr\> tag, which is cool.
It is a horizontal line that represents a different type of content, and I will be using those until I ever try to seperate content with actually good css.

I also want to add little icons for each social, rather than using text.
I got the logos from the websites' favicons, because I couldn't bother getting the svg to work.
However, as a side effect, they are low quality.
It looks very bad right now, but I already knew that.

Next is project root, I will just make it display everything.
Just like putting category root in category_page.rs, I will put the project root page in project_page.rs.
I just copied and slightly modified the category root.
I also just added a header: "Projects" and "Categories" to both roots.

That was easy.
Next is to display the pretty name in each project page.
The problem is that each project page only gets the url name (the-kebab-one), and for reasons, I do not want to simply turn the kebab-case into Title Case.
So, I will undo the kebab case by looking at the original project list and finding the project that matches.
But before that, I want to sleep.

I slept.

I just realized, I already got the project for other stuff, so I can just use project.name.
I thought this would be annoying but it was easy.
To make this a little more challenging for myself, I am going to do the same thing for categories.
I just added a function that returns a map with the keys the ugly name and the values the pretty name.
It is kind of redundant, but speed does not matter right now.

I wonder if I should make a const for the project data so I don't have to parse it each time.
Now, it breaks when the category doesn't exist but once again, I can repeat what I did for the project pages.

<!-- ### 2024/4/4 Branches

I am going to experiment with branches.

Previously, I just had a main branch (and some other irrelevant branches) and the files were stored in doc/.

I made a new branch called update-projects and gh-pages.
The update-projects branch will only be for updating the projects.json.

When pushing to any branch other than gh-pages, I won't need to worry about building.

When I am satisfied with a change I made, I will commit it to whatever branch I was working on, and then merge that branch to the main branch.
Then, I will build the code that is on the main branch, and with that change, I will push it to gh-pages.

I feel like that last part can be automated with github actions or git hooks, but I will not look into that right at this moment.

The other development branches will be called `feature/cool-thing` or `bugfix/broken-thing`.
As for this markdown, I will not worry about it because I am just one person and I will only have one active development branch.
Later, it would be cool to have a better way to manage this devlog, but that is not important right now.

I did this because 

1. Practice for bigger projects
2. Decouple content from source code
   1. I am considering another way so that updates to the content will not require git commits and rebuilding. -->

### 2024/4/4 Decoupling

I was going to decouple my code with a complicated system of branches, but I think a simpler way is to have a branch called content with only what is currently in my res folder.
Or, I could have an entirely new repository.
I am not sure if further decoupling is even a good idea because it would make my code slower.
I will sleep on this and see what I think of it tomorrow.

2024/4/7

It has been a few days and I have decided to make a new branch called resources, which will be the replacement for the res folder.
It was a pretty arbitrary decision and both options of making a seperate branch or repo are not ideal.
If I can eventually get a backend to work and store the resources, I will do that.

Well, now I need to actually change the source code to accomidate for this.
Though I refer to all of res, I do not really care about the favicon or the buddhabrot images, since those won't be changed frequently.

I will be following https://rust-lang-nursery.github.io/rust-cookbook/web/clients/apis.html.
The link to fetch will be https://api.github.com/repos/mathkimchi/mathkimchi.github.io/contents/projects.json?ref=resources.
`ref=resources` refers to the branch being resources.
<!-- Actually, https://raw.githubusercontent.com/mathkimchi/mathkimchi.github.io/resources/projects.json might be better. -->

Hmm... I was testing and I keep getting a status 403 error, which means that Github api is refusing my requests because I reached the rate limit.
I don't know what it is, but I have done it less than 10 times so far, so I have no clue why the api is already blocking me.
But one thing this shows me is that it would probably be very unreliable for the users as well if it is unreliable for me.

I won't be using reqwest and tokio because the [yew docs](https://yew.rs/docs/tutorial#fetching-data-using-external-rest-api) isn't using it.
I think almost all APIs are going to fail if I access it on my localhost, similar to how the youtube embed was failing.
I will try committing and see what happens.

---

That didn't work.
It is disabling cross origin requests, so maybe it will work if I call the github API.

---

Well, I got another error, so I guess that is some progress.
I will try not parsing the json.

---

Okay, I got the api to run, but it has a limit of 60 and that is not a lot, so I will try romething else.
I won't be using another api either because those will also have their own problems like an api limit or not being free, and it will be a lot of effort.

Instead, I think I can come up with a compromise.
I want:

- easy to change content seperately from the resources
- easy to develop, aka live development

I am going to get rid of build rs and get the json the same way I get the favicon.
I was not doing this because it was annoying to do live development with this, but I found out I can insert `<link data-trunk rel="copy-dir" href="res">` to the original html file, to get it to be copied every build.
This is pretty much exactly the thing I was looking for.

Actually, something even better is just the include_str macro.
In the end, I didn't really change anything.

### 2024/4/9 Improve Visuals

Get buddhabrot image directly without asking github.
- I hope this makes it faster
- I used the trunk link trick I learned

For most of the css tips, I got them from W3.

I moved the css into style.css and linked it with the trunk link trick.


Make project lists look better
- Previously, the description was the link, but that looks very ugly
- round corners https://www.w3schools.com/css/css3_borders.asp
- Make the entire thing clickable

Dropdown settings in navbar
- only dark/light for now

Dark/light button (automatically dark)
- toggle from https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
- Actually, I am not going to do this one because I couldn't figure out a way to quickly implement it.

List category on project page and project list.
If https://doc.rust-lang.org/std/iter/struct.Intersperse.html was a feature right now, this would be so much easier.

---

The exact moment I pushed my changes, I realized I forgor to build.

### 2024/4/10 Blogs

I want to write blogs.
Maybe devlog is the more appropriate term.

I can either have one JSON containing all the blog entries, or have a file for each entry.

If I go with the second option, I will need to find a way to read files from yew.
I guess fetch might be what I am looking for, but this might not be the best solution in the end, because I might run into github api issues again.
Wait, I just realized this is the same thing I did last time...
It might be different because it is a relative fetch, but I am not going through that again.

So, I am going to have one big JSON I guess.

Actually, I don't want to do this right now.
I am going to work on other projects before working more on this website.

### 2025/03/16 Github Action

It's been a while.

I am going to try github action once again.

The goal is to set it up so that:
- EVENT: When the `main` branch's content changes (merge, commit)
- ACTION: update the `ghpage` branch to have the main branch's code and res, then run `make build` to update the `ghpage` branch's `/docs` folder

now, I can gitignore the `/docs` folder in the main branch.

NOTE: the GHPage site is being deployed from the `/docs` folder.

Ideally, there would be a way to have the `ghpage` branch's content only have the site content,
without explicitly containing the source code like `/src` and `/res` and etc.

Hmmm, [this repo](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/.github/workflows/publish_gh_pages.yml) by Ja-sonYun seems to be doing something similar to what I want, but even better than I had imagined.
I will be trying to make something similar to this.
The standard name for this branch is actually `gh-pages`, not `ghpage`.

I'll commit the current changes and then create an empty branch with this name with `git switch --orphan gh-pages`.

Setting up the workflow yml:
- I copied the official Action/rust workflow thing, and it seems that GH Action now comes with cargo by default.
- As for trunk, I found this action: https://github.com/marketplace/actions/trunk-action, which is claims to be "much faster than `cargo install trunk`, seconds vs minutes"
- Then, I build via the makefile
- Then, I am going to try something I am not sure will work with the [`upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) action and then [`deploy-pages`](https://github.com/actions/deploy-pages) action.

...

Hmmm...
[It didn't work.](https://github.com/mathkimchi/mathkimchi.github.io/actions/runs/13909817378/job/38921364837)
I actually haven't built this on my new laptop yet, so I will install trunk and try this on my system first.

Note: do not trust https://trunkrs.dev/ suggestion to do `nix-env -i trunk`,
it crashed my whole computer.

The first error was happening because `trunk build` was ignoring the `target = "target.html"` inside
`trunk.toml` but that was resolved by renaming `trunk.toml` -> `Trunk.toml`.

Had to run `rustup target add wasm32-unknown-unknown` locally, but not sure if github actions has that.

Now `make build` runs successfully locally.

...

So I got the same error in [this action](https://github.com/mathkimchi/mathkimchi.github.io/actions/runs/13910705809/job/38924117020)
as I got locally before running `rustup target add wasm32-unknown-unknown`,
so I will just run that as a part of my `build_gh_page.yml`,
though there might be a rust configuration `use` thing that already comes with wasm32 support.

...

[It built succesfully but failed at deploying](https://github.com/mathkimchi/mathkimchi.github.io/actions/runs/13910756719/job/38924278542).
The little github suggestion guy said to add:

```yml
    permissions:
      id-token: write
      contents: read
```

so I will try it and see if it works.
I am feeling 50/50 on its suggestion because it is made by Github
so I feel like it will have an actual chance with fixing a github related problem.

...

[I got a similar error with a different permission](https://github.com/mathkimchi/mathkimchi.github.io/actions/runs/13910849174/job/38924575634).
I guess github guy was on the right track but not entirely correct.
I added a new permission and this time, I don't think the permissions will be an issue because
the [official example](https://github.com/actions/deploy-pages) is looking similar.

On a sidenote, I kinda feel bad about using gh actions because this is possible to automate on my side but it is more convenient to have it run using gh's resources.

...

Okay, [another error](https://github.com/mathkimchi/mathkimchi.github.io/actions/runs/13910978416/job/38924960199)
and I realized I missed one last section of the [official example](https://github.com/actions/deploy-pages): the environment.

https://github.com/actions/deploy-pages/blob/854d7aa1b99e4509c4d1b53d69b7ba4eaf39215a/README.md?plain=1#L35

The one remaining difference is the build vs deploy jobs, but hopefully that doesn't break stuff.

...

Yooo, it worked!

At least, there was no error.

Under `Settings`->`Pages`->`Build and deployment`->`Source`,
I selected `Github Actions` because that is what I assume is supposed to happen.

With this, I don't even need the gh-pages branch as well as the docs folder.
I will delete the branch and remove the docs folder then .gitignore it.
I'm actually going to rename the `docs` folder to the `dist` folder, which is the original default output directory for Trunk.
I only changed this to docs because that is what github pages recommended.

...

I'm going to add this Math Kimchi Home Page as a project,
because I want to make a video on it and I want to make sure the changes actually show up.

### 2025/03/17 Footer

I am going to post a vid on this whole homepage,
and something I want to add before making a video is the footer,
that should contain information about this website and credit myself.

I made a PageBase so that I can universally change basic pages (like adding a footer)
without having to change each page.
I could force the page base by just putting it in the router,
but I want to give the choice not to have it.

For the footer, I want to have:
- The Math Kimchi logo
  - I unironically lost this, so I am kind of screwed
  - Hooo, I found it in: https://github.com/mathkimchi/mathkimchi-slideshows/blob/main/mathkimchi.jpg
- "Made with Yew by Math Kimchi" with a link to this repository
- Copyright (maybe), I just want to link it to the LICENSE for this page, which currently doesn't exist
  - Do I need to do some legal thing to register copyright?
  - I want to put this under MIT license, hopefully all the resources I learned from will allow for that
- I'm just going to move my whole socials (from the main page) here
