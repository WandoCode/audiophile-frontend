# Audiophile

This repo contains the code for the frontend of the [audiophile website](https://audiophile-frontend-eta.vercel.app/).
The goal of this website is mainly to show off some of my web development skills.

## Backend

The backend for this project can be found on this repo: [audiophile-backend](https://github.com/WandoCode/audiophile-backend).

It's based on **CMS Strapi** that I set up: [see readme](https://github.com/WandoCode/audiophile-backend).

## Hightlighted skills in this project

- NextJS
- React with React context and react-query
- Typescript
- Payment with Stripe is working
- Storybook for the main reused components (not deployed)
- SCSS (BEM)
- Custom Form validation with _RegEx_

NB: The current version in production is the 'nextjs-complet' branch. The main branch of the project contains the code for the 1st version of this website (with ReactJS).

## Main features

### Responsive

**Fully responsive**: the website works on desktop, tablet and mobile (last version of Chromimum or Firefox).

### Accessibility

All the website is accessible with **keyboard only**.
I used arias attributes to improve **navigation for screen readers**.

### Unit tests

I wrote unit tests for the all components with **Vitest** and **testing-library**.

### Payment with Stripe

Online payment is configured and working (test mode). It use a custom API endpoint I created to handle the payment.

### Custom 'toast' message (in-page notification)

When adding item to the cart, a toast message will appear (no library).
I used the 'framer-motion' library to animate it.

### Datas persistence

The user can save items into a cart. I used localStorage as an easy way to keep track of the cart content.

### Design

The idea and design of this project comes from [Frontend Mentor](https://www.frontendmentor.io/profile/Wandole).

I added a few animation (button hover, toast message, text apparition in homepage, etc.)

# How to install

## Prerequisites

- nodeJS v16.14.2 or better

## Setup

NB: don't forget [the backend](https://github.com/WandoCode/audiophile-backend)

- Choose the 'nextjs-complet' branch
- Run `npm install`
- Change the backend url in 'config.json'
- Launch the development environement with `npm run dev`

# Dependencies

The core dependencies are _NextJs_ (v13) with:

- _React_(v18)
- _react-router-dom_(v6)
- _react-query_(v3)
- _axios_

_react-markdown_ was used for a few paragraph, and _framer-motion_ animate toast messages.

The dev dependencies are mainly _storybook_ and testing libraries as _vitest_, _jsdom_ and _testing-library_.

# Scripts

## `dev`

Launch the app in the environement for development with Vite.

## `test`

Launch tests with Vitest.

## `build`

Build the app with Vite

## `preview`

Host the built version of the app with Vite.

## `storybook`

Launch the the storybook in a development environement.

## `build-storybook`

Build the storybook.

# To be improved

- SEO
- Reconfigure the custom CMS api endpoints to simplify the datas received in the client.
- Add test for pages components.
- Add integration/end-to-end tests ('happy path')

# Licence

This website has been build for demonstration purpose only.

All the content is published under the MIT licence (see ['/licence.txt'](https://github.com/WandoCode/audiophile-frontend/blob/main/licence.txt))
