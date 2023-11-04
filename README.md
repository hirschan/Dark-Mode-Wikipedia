<p align="center">
  <img src="https://github.com/hirschan/Dark-Mode-Wikipedia/blob/master/dark_wiki_icon_large.png" width="150"/>
</p>

<h3 align="center">Dark Mode for Wikipedia on Firefox</h3>
<p align="center">
Based on Github's dark default theme.
<a href="https://addons.mozilla.org/firefox/addon/dark-mode-for-wikipedia/"><strong>Download »</strong></a>
</p>


<p align="center">
<img src="https://img.shields.io/amo/users/dark-mode-for-wikipedia"/> <img src="https://img.shields.io/amo/dw/dark-mode-for-wikipedia"/> <img src="https://img.shields.io/github/issues/hirschan/Dark-Mode-Wikipedia"/>
</p>

# About
This Firefox extension is suited for the **average** Wikipedia user. It is specifically adapted for the **English 🇬🇧** Wikipedia domain (en.wikipedia.org) and might not be ideal outside of normal activities.
* If you find issues, [post here](https://github.com/hirschan/Dark-Mode-Wikipedia/issues/21)
* 14,000+ downloads on Firefox

As of October/November 2023, I re-worked this extension to move some coloring logic into `contentScript.js`. Reason: `background.css` became too big and difficult to maintain.

## News

As of 2023-10-25 I started my journey in refactoring this extension since it's grown and is difficult to maintain. If you want to check the refactoring work in progress and contribute, please switch branch to: [refactor](https://github.com/hirschan/Dark-Mode-Wikipedia/tree/refactor). CSS file will be reduced and I will use `contentScript.js` instead for some dynamic coloring.

## Installation
Can be added as an extension on [Firefox here](https://addons.mozilla.org/firefox/addon/dark-mode-for-wikipedia/).

Or:
1. Download the repository
2. Open Firefox and paste in the search field: **about:debugging#/runtime/this-firefox**
3. Press: **Load Temporary Add-on...**
4. Select **manifest.json**

## Example
<img src ="https://github.com/hirschan/Dark-Mode-Wikipedia/blob/master/screenshots/screenshot_example.png" width="600">

## Checklist before releases ✔️
- [X] [Basic Wiki site](https://en.wikipedia.org/wiki/United_Kingdom)
- [X] [List example](https://en.wikipedia.org/wiki/List_of_countries_by_total_health_expenditure_per_capita)
- [X] [Code syntaxes](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program#Examples)
- [X] [Table with colors (element td)](https://es.wikipedia.org/wiki/King_Crimson#Componentes_del_grupo_por_%C3%A1lbumes)
- [X] [Temperature table](https://en.wikipedia.org/wiki/London#Climate)
- [X] [Coloring on table](https://en.wikipedia.org/wiki/Democracy_Index#By_region)
- [X] [Progress bars](https://en.wikipedia.org/wiki/2018_Swedish_general_election#Parties)
- [X] [Pie chart](https://en.wikipedia.org/wiki/Wikipedia#Language_editions)
- [X] [Red green yellow table coloring](https://en.wikipedia.org/wiki/Nordic_Defence_Cooperation#Limitations)
- [X] [Element "span" grey coloring](https://en.wikipedia.org/wiki/Affricate)

## Checkout PRs locally
1. Run in cmd: `git fetch origin pull/$ID/head:$BRANCH_NAME`
2. `git checkout BRANCH_NAME`

## Buy me a coffee ☕
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hirschan)

## Roadmap

1. [] Refactor `contentScript.js`
2. [] Introduce CSS file to list colors in
3. [] Improve coloring logic for tables