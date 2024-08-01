# @react-native-helper/netinfo

@react-native-helper/netinfo make sures the internet connectivity

## Installation

```sh
npm install @react-native-helper/netinfo
```

## Required dependencies

```sh
npm i @react-native-community/netinfo @rnpack/utils react-native-design react-native-vector-icons
```

## Usage

Wrap your root component in `PaperProvider` from `react-native-paper`. This will usually be in the `index.js` file. If you have an Expo project, you can do this inside the exported component in the `App.js` file.

Example:

```js
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
```

Import NetInfoHelper and use

Example:

```js
import NetInfoHelper from '@react-native-helper/netinfo';

...

return (
    ...
    <NetInfoHelper />
    ...
)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/41302126?v=4" width="64" height="64" alt="Abiraman K">
    </td>
    <td>
      <a href="https://github.com/AbiramanK" target="_blank">Abiraman K</a>
    </td>
  </tr>
</table>

## Thank you

### Sponsors

Thank you to all our sponsors! [Become a sponsor](https://opencollective.com/react-native-helper#sponsor) and get your image on our README on GitHub.

<a href="https://opencollective.com/react-native-helper#sponsors" target="_blank"><img src="https://opencollective.com/react-native-helper/sponsors.svg?width=890" alt="@react-native-ui-design/dialog"></a>

---
