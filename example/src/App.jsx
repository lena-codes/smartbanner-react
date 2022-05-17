import React from 'react'

import { SmartBanner } from 'smartbanner-react'

const App = () => {
  return (
    <SmartBanner
      src='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
      name='MyApp'
      author='lena.codes'
      description='GET - On the Play Store'
      buttonLink='https://lena.codes'
      buttonText='View'
    />
  )
}

export default App
