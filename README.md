# Random Users

## Intro

This project presents a grid with random users data fetched from [random users api](https://randomuser.me/api/). The interface allows the user to load sets of 10 random male, female or both random users. By default, data is loaded after a 2-second waiting period.

## Development

This project was developed in [VueJS](https://vuejs.org/) aiming to compile a **custom element** that can be used in any HTML page.

## Custom Element

The custom element produced can be introduced in HTML pages as follows:

-   include `<script src = "./ random-users.js"></script>`
-   include custom element `<random-users></random-users>` in the HTML body

### Props

By default, the grid data is loaded after a 2-second waiting period. However, <random-users> custom element accepts a prop to customize the waiting time for obtaining data from random users api.

The existing props are:
| PROP NAME | TYPE | EXAMPLE | MEANING
|--|--|--|--|
| wait | Number | 2000 | Time to wait in milliseconds

#### Examples

1. No prop, wait has default value of 2000 (2 seconds)
   `<random-users></random-users>`

2. wait has value of 5000 (5 seconds)
   `<random-users wait="5000"></random-users>`
