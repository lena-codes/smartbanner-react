import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import SmartBanner from '../../src'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1 style={{ margin: '12px' }}>ReactSmartBanner Demo</h1>
        <SmartBanner
          src='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
          name='MyApp'
          author='lena.codes'
          description='GET - On the Play Store'
          buttonLink='https://lena.codes'
          buttonText='View'
          onClose={() => alert('pressed the close button!')}
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.querySelector('#demo'))
root.render(<Demo />)
