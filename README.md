# My React Starter

Create React apps with no build configuration.

## Quick Overview

```sh
git clone
cd my-react-starter
rm -rf .git
npm install
npm run dev
```

> clone the repo. Change directory into the my-react-starter folder. Remove the current .git file so that you can git init your own. install the npm packages. Run the dev script to start the app

Then open [http://localhost:1234/](http://localhost:1234/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like parcel or Babel.<br>
They are preconfigured so that you can focus on the code.

It will create a directory called `my-react-starter` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-react-starter
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .eslintrc.json
├── .prettierrc
└── src
    ├── components
        ├── App.js
    ├── layout
        ├── layout.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-react-starter
```

Inside the newly created project, you can run some built-in commands:

### `npm run dev`

Runs the app in development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## Philosophy

- **One Dependency:** There is only one build dependency. It uses parcel, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

- **No Lock-In:** You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

- React, JSX, ES6, Parcel, Babel, Eslint Config, Prettier Config, Emotion
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS

## Popular Alternatives

- **Learning React** in a comfortable and feature-rich development environment.
- **Starting new single-page React applications.**
- **Creating examples** with React for your libraries and components.

Here are a few common cases where you might want to try something else:

- If you want to **try React** without hundreds of transitive build tool dependencies, consider [using a single HTML file or an online sandbox instead](https://reactjs.org/docs/try-react.html).

- If you need to **integrate React code with a server-side template framework** like Rails, Django or Symfony, or if you’re **not building a single-page app**, consider using [nwb](https://github.com/insin/nwb), or [Neutrino](https://neutrino.js.org/) which are more flexible. For Rails specifically, you can use [Rails Webpacker](https://github.com/rails/webpacker). For Symfony, try [Symfony's webpack Encore](https://symfony.com/doc/current/frontend/encore/reactjs.html).

- If you need to **publish a React component**, [nwb](https://github.com/insin/nwb) can [also do this](https://github.com/insin/nwb#react-components-and-libraries), as well as [Neutrino's react-components preset](https://neutrino.js.org/packages/react-components/).

- If you want to do **server rendering** with React and Node.js, check out [Next.js](https://github.com/zeit/next.js/) or [Razzle](https://github.com/jaredpalmer/razzle). Create React App is agnostic of the backend, and only produces static HTML/JS/CSS bundles.

- If your website is **mostly static** (for example, a portfolio or a blog), consider using [Gatsby](https://www.gatsbyjs.org/) instead.

- Finally, if you need **more customization**, check out [Neutrino](https://neutrino.js.org/) and its [React preset](https://neutrino.js.org/packages/react/).

All of the above tools can work with little to no configuration.

If you prefer configuring the build yourself, [follow this guide](https://reactjs.org/docs/add-react-to-an-existing-app.html).

## React Native

Looking for something similar, but for React Native?<br>
Check out [Expo CLI](https://github.com/expo/expo-cli).

## License

my-react-starter is open source software [licensed as MIT]
