# Capsule

A CSS-only Hugo theme using the [Bulma CSS
framework](https://github.com/jgthms/bulma) and [Font-Awesome
icons](https://github.com/FortAwesome/Font-Awesome).

![Capsule Corp.](https://raw.githubusercontent.com/sudorook/capsule/master/assets/capsule-corp.png)

# Install

From the base of your website, run: 

```
git submodule add https://github.com/sudorook/capsule themes/capsule
```

You can then either build Hugo on the command line and pass the `-t capsule`
flag, or you can add `theme = "capsule"` to your config.toml file.


**Note: Any additional documentation will be added to the [Capsule
Demo](https://sudorook.gitlab.io/capsule-demo) site, not here.**



## Notes: 

### 1. Syntax highlighting (via pygments)

For code blocks, pick the highlighter style in config.toml by setting: 
```
pygmentsstyle = "<style>"
```

For dark highlighter themes, you should rebuild capsule CSS with
`build/extra/syntax.sass`. Uncomment it from the capsule.sass file and run
`gulp`.

Without that file, the background color will default to Bulma's light
background-color, and light colored elements meant to be displayed against dark
backgrounds from dark themes will be hard to read.


### 2. Unused classes in Bulma

Capsule is set to only compile the classes it needs. To enable more Bulma
classes, uncomment the relevant sass files in `build/bulma/bulma.sass`.


### 3. Enable automatic generation of nav menus

In your config.toml files, set:

```
SectionPagesMenu = "main"
```

With this set, capsule with automatically generate a navigation menu in the
navbar based on all the sections (the directories inside the content/
directory) present in your site.


### 4. Add git metadata to your pages

If you host your site on a public git vc server, you can set capsule to build a
"Last edited on ..." note to each page that uses git metadata to display the
date of the last commit and add a link to its blob on your public repo. 

In your config.toml file, set:
```
enableGitInfo = true

[params]
  repo = "https://github.com/<user>/<repo>

```

The `repo` variable should point to the url of your repo for your website. The
above example uses GitHub, but GitLab and any other site that follows the
format of `<siteurl>/<user>/<repo>/commit/<hash>` will work, too. 


### 5. Add custom javascript or CSS to a page

In the toml header, add: 
```
css = """
<style>
 ...
</style>
"""

js = """
<script>
 ...
</script>
"""
```

Any CSS or JS specified here will add to the site \<head\> when Hugo renders
the page.


### 6. Enable table of contents

To generate a table of contents for a specific page, add to the toml header:
```
toc = true
```

The table of contents will contain all the header items defined in the
markdown. The nesting levels for each match the header weight (h1, h2, etc.).


# Build

To (re)build the CSS, you need to have npm and gulp installed. Clone the
capsule repository and once in it run:

```
npm install
```

and then

```
gulp
```

You can enable/disable sass components in /build/sass/capsule.sass. To use
customized versions of capsule, you can maintain a fork repo and set the theme
submodule to your fork, or you can simply make a symlink in the themes/ folder
of your site to your local repo.
