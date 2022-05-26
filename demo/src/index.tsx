import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import SmartBanner from '../../src'

export const Demo: React.FC = () => {
  return (
    <div>
      <SmartBanner
        src='https://cataas.com/cat'
        name='MyApp'
        author='lena.codes'
        description='GET - On the Play Store'
        buttonLink='https://lena.codes'
        buttonText='View'
        onClose={() => alert('pressed the close button!')}
      />
      <h1 style={{ margin: '12px' }}>ReactSmartBanner Demo</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.querySelector('#demo') ?? document.createElement('div')
)
root.render(<Demo />)
