import React from 'react'
import { CloseIcon } from './Icon/CloseIcon'
import './index.css'

interface SmartBannerProps {
  src: string
  name: string
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

type Theme = 'light' | 'dark'

const SmartBanner: React.FC<SmartBannerProps> = ({
  src,
  name,
  author,
  description,
  buttonText,
  buttonLink,
  theme = 'light',
  onClose
}) => {
  return (
    <div className={'banner'.concat(` ${theme}`)}>
      <div className='row'>
        {onClose && (
          <button type='button' onClick={onClose}>
            <CloseIcon />
          </button>
        )}
        <div className='row space-right'>
          <img src={src} role='presentation' />
          <div className='column space-left'>
            <p className='title title-color-light'>{name}</p>
            <p className='text small-font'>{author}</p>
            <p className='text medium-font'>{description}</p>
          </div>
        </div>
      </div>
      <a href={buttonLink} target='_blank' role='button'>
        {buttonText}
      </a>
    </div>
  )
}

export default SmartBanner
