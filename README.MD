# Create Plain App

A tiny CLI that creates a barebones web app without a buildstep. Most modern browsers now ship with support for [ES-Modules](https://caniuse.com/#feat=es6-module) and [ES6](https://caniuse.com/#feat=es6) meaning that you may not need a build step for your projects.

```
npx create-plain-app my-app
cd my-app
npm start
```

## Roadmap

I plan to add an optional feature to bundle code prior to publication. This wouldn't involve any transpiling and is meant purely as a performance optimization to reduce the number of network requests.

## Acknowledgements

A special thank you goes to [Luke Jackson](https://github.com/lukejacksonn) for authoring [servor](https://github.com/lukejacksonn/servor), the static file server used by this project.

## License

Create Plain App is open source software licensed as MIT.
