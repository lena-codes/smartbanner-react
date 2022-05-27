import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Apollo from './resources/apollo.jpg'

import './index.css'
import { SmartBanner, Theme } from '../../src'

export const Demo: React.FC = () => {
  const [theme, setTheme] = useState('light' as Theme)
  const switchTheme = (theme: Theme) => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      case 'dark':
        setTheme('light')
        break
    }
  }
  return (
    <div>
      <SmartBanner
        src={Apollo}
        title='MyApp'
        author='lena.codes'
        description='GET - On the Play Store'
        buttonLink='https://lena.codes'
        buttonText='View'
        onClose={() => alert('pressed the close button!')}
        theme={theme}
      />
      <div className='container'>
        <h1 style={{ margin: '12px' }}>
          smartbanner-react demo (light & dark)
        </h1>
        <button
          type='button'
          onClick={() => switchTheme(theme)}
          className='switch-theme-button'
        >
          switch theme
        </button>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.querySelector('#demo') ?? document.createElement('div')
)
root.render(<Demo />)
