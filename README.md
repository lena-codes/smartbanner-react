# smartbanner-react

> React component library implementing the iOS specific smart banner for all platforms

[![NPM](https://img.shields.io/npm/v/@lena-codes/smartbanner-react.svg)](https://www.npmjs.com/package/@lena-codes/smartbanner-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://app.travis-ci.com/lena-codes/smartbanner-react.svg?branch=main)](https://app.travis-ci.com/lena-codes/smartbanner-react)

Light Theme
![light theme](https://github.com/lena-codes/smartbanner-react/blob/main/demo/src/resources/light.png?raw=true)

Dark Theme
![dark theme](https://github.com/lena-codes/smartbanner-react/blob/main/demo/src/resources/dark.png?raw=true)

## Install

```bash
npm install --save @lena-codes/smartbanner-react
```

or

```bash
yarn add @lena-codes/smartbanner-react
```

## Usage

```tsx
import { SmartBanner } from '@lena-codes/smartbanner-react'

<SmartBanner
  src='enter-your-icon-here.png'
  title='MyApp'
  author='lena.codes'
  description='GET - On the Play Store'
  buttonLink='https://lena.codes'
  buttonText='View'
  onClose={() => alert('pressed the close button!')}
/>
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| src | string | *required* Image source |
| title | string | *required* First line of text |
| author | string | *required* Second line of text |
| description | string | *required* Third line of text |
| buttonText | string | *required* Button text |
| buttonLink | string | *required* Button link |
| onClose | ( ) => void | *optional* Function implementing the close button; if not set button is *hidden* |
| theme | 'light' \| 'dark' | *optional* Predefined color theme, defaults to 'light' if not set |
| background | string | *optional* sets the background css value; overwrites theme value |
| closeIconColor | string | *optional* sets the close icon color; overwrites theme value |
| textColor | string | *optional* sets the text color; overwrites theme value |
| titleColor | string | *optional* sets the title color; overwrites theme value |
| buttonColor | string | *optional* sets the link button color; overwrites theme value |

## Check it out

### Build the project

```bash
npm run build
```

### Run demo locally

```bash
npm start
```

## License

MIT © [lena-codes](https://github.com/lena-codes)
