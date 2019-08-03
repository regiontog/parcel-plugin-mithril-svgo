# parcel-plugin-mithril-svgo

Parcel inline SVG mithril components

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

To install add the plugin as a dependency.

```
npm install --save-dev parcel-plugin-mithril-svgo
```

### Usage

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<body>
    <script src="app.js"></script>
</body>
</html>
```

```js
// app.js
import m from "mithril";
import ArrowIcon from "/assets/icons/arrow.svg";

m.render(document.body, ArrowIcon);
```

Run parcel in production mode to optimize with SVGO.

```
parcel build index.html
```

### Configuration

The contents of `svgorc` or `svgo.config.js` will be passed to `new SVGO(...)`. See available plugins [here](https://github.com/svg/svgo#what-it-can-do).

Example

```js
// svgo.config.js
module.exports = {
    plugins: [
        {
            removeMetadata: true,
        },
    ]
};
```

## Built With

* [SVGO](https://github.com/svg/svgo) - SVG Optimizer

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details