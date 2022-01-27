---
title: "Configuration"
---

<!--Add search engine to Quartz like Notion>Super -->

# Star Sailors
## Media inspiration
* [Earth to Echo](https://en.m.wikipedia.org/wiki/Earth_to_Echo) 

```yaml
name: Your name here! # Shows in the footer
enableToc: true # Whether to show a Table of Contents
description: Page description to show to search engines
page_title: Quartz Example Page # Default Page Title

links: # Links to show in footer
  - link_name: Twitter
    link: https://twitter.com/_jzhao
  - link_name: Github
    link: https://github.com/jackyzha0
```

### Graph View
To customize the Interactive Graph view, you can poke around `data/graphConfig.yaml`.

```yaml
enableLegend: false # automatically generate a legend
enableDrag: true # allow dragging nodes in the graph
enableZoom: true # allow zooming and panning the graph
paths: # colour specific nodes path off of their path
  - /moc: "#4388cc"
```


## Styling
Want to go even more in-depth? You can add custom CSS styling and change existing colours through editing `assets/custom.scss`. If you'd like to target specific parts of the site, you can add ids and classes to the HTML partials in `/layouts/partials`. 

### Partials
Partials are what dictate what actually gets rendered to the page. Want to change how pages are styled and structured? You can edit the appropriate layout in `/layouts`.

For example, the structure of the home page can be edited through `/layouts/index.html`. To customize the footer, you can edit `/layouts/partials/footer.html`

More info about partials on [Hugo's website.](https://gohugo.io/templates/partials/)

Still having problems? Checkout our [FAQ and Troubleshooting guide](notes/troubleshooting.md).