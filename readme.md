# Audiophile

This repo contains the code for the frontend of the [audiophile website](https://wandocode.github.io/audiophile-frontend/#/audiophile-frontend/).
The goal of this website is mainly to show off some of my web development skills.

## Backend

The backend for this project can be found on this repo: [audiophile-backend](https://github.com/WandoCode/audiophile-backend).

It's based on CMS Strapi that I set up: [see readme](https://github.com/WandoCode/audiophile-backend).

## Hightlighted skills in this project

- Typescript
- React with React context
- Storybook for the main reused components (not deployed)
- SCSS (BEM)
- Custom Form validation with RegEx

NB: The 'nextjs' branch contains the functional NextJS version of the website that I used to discover the NextJS framework in details. It's not deployed.

## Main features

### Responsive

The website works on desktop, tablet and mobile (last version of Chromimum or Firefox).

### Datas persistence

The user can save items into a cart. I used localStorage as an easy way to keep track of the cart content.

### Design

The idea and design of this project comes from [Frontend Mentor](https://www.frontendmentor.io/profile/Wandole).

# How to install

## Prerequisites

- nodeJS v16.14.2 or better

## Setup

NB: don't forget [the backend](https://github.com/WandoCode/audiophile-backend)

- Run `npm install`
- Change the backend url in ./src/hooks/config.json
- Launch the development environement with `npm run dev`

# Dependencies

The main dependencies are _React_ and _Storybook_.

_ReactMarkdown_ has been used aswell, _React-router-DOM_, and _axios_.

# Scripts

## `dev`

Launch the app in the environement for development with Vite.

## `build`

Build the app with Vite

## `preview`

Host the built version of the app with Vite.

## `storybook`

Laucnch the the storybook in adevelopment environement.

## `build-storybook`

Build the storybook.

## `deploy`

Deploy the app on github page with the help of gh-page

# Licence

This website has been build for demonstration purpose only.

All the content is published under the MIT licence (see ['/licence.txt'](https://github.com/WandoCode/audiophile-frontend/blob/main/licence.txt))
