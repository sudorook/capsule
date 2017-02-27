# Capsule

A CSS-only Hugo theme using the Bulma CSS framework and Font-Awesome icons.

![Capsule Corp.](assets/capsule-corp.png)

To (re)build the CSS, you need to have npm and gulp installed. Run:
```
npm install
```

and then

```
gulp
```


## Notes: 

### 1. Synatx highlighting (via pygments)

For code blocks, pick the highlighter style in config.toml by setting: 
```
pygmentsstyle = "<style>"
```

For dark highlighter themes, you should rebuild capsule css with
`build/extra/syntax.sass`. Uncomment it from the capsule.sass file and run
`gulp`. 

Without that file, the backgound color will default to Bulma's light
background-color, and colored elements from dark themes will be hard to read
against it.


### 2. Unused classes in Bulma. 

Capsule is set to only compile the classes it needs. To enable more Bulma
classes, uncomment the relevant sass files in `build/bulma/bulma.sass`.
