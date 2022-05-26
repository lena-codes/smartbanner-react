# smartbanner-react

> React component library implementing the iOS specific smart banner for all platforms

[![NPM](https://img.shields.io/npm/v/smartbanner-react.svg)](https://www.npmjs.com/package/smartbanner-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save smartbanner-react
```

## Usage

```tsx
import React, { Component } from 'react'
import SmartBanner from 'smartbanner-react'

<SmartBanner
  src='https://cataas.com/cat'
  name='MyApp'
  author='lena.codes'
  description='GET - On the Play Store'
  buttonLink='https://lena.codes'
  buttonText='View'
  onClose={() => alert('pressed the close button!')}
/>
```

## License

MIT © [lena-codes](https://github.com/lena-codes)
