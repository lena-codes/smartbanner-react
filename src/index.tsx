import React from 'react'
import { CloseIcon } from './Icon/CloseIcon'
import './index.css'

interface SmartBannerProps {
  src: string
  title: string
  author: string
  description: string
  buttonText: string
  buttonLink: string
  theme?: Theme
  background?: string
  onClose?: () => void
  textColor?: string
  titleColor?: string
}

export type Theme = 'light' | 'dark'

const SmartBanner: React.FC<SmartBannerProps> = ({
  src,
  title: name,
  author,
  description,
  buttonText,
  buttonLink,
  theme = 'light',
  onClose
}) => {
  return (
    <div className={`banner ${theme}`}>
      <div className='row'>
        {onClose && (
          <button type='button' onClick={onClose}>
            <CloseIcon theme={theme} />
          </button>
        )}
        <div className='row space-right'>
          <img src={src} role='presentation' />
          <div className='column space-left'>
            <p className={`title title-color-${theme}`}>{name}</p>
            <p className='text small-font'>{author}</p>
            <p className='text medium-font'>{description}</p>
          </div>
        </div>
      </div>
      <a
        href={buttonLink}
        className={`link-${theme}`}
        target='_blank'
        role='button'
      >
        {buttonText}
      </a>
    </div>
  )
}

export default SmartBanner
