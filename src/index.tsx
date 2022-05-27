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

export const SmartBanner: React.FC<SmartBannerProps> = ({
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
    <div className={`smartbanner smartbanner-${theme}`}>
      <div className='smartbanner-row'>
        {onClose && (
          <button
            type='button'
            onClick={onClose}
            className='smartbanner-close-button'
          >
            <CloseIcon theme={theme} />
          </button>
        )}
        <div className='smartbanner-row smartbanner-space-right'>
          <img src={src} role='presentation' className='smartbanner-img' />
          <div className='smartbanner-column smartbanner-space-left'>
            <p className={`smartbanner-title smartbanner-title-${theme}`}>
              {name}
            </p>
            <p className='smartbanner-text smartbanner-small-font'>{author}</p>
            <p className='smartbanner-text smartbanner-medium-font'>
              {description}
            </p>
          </div>
        </div>
      </div>
      <a
        href={buttonLink}
        className={`smartbanner-link-${theme} smartbanner-link`}
        target='_blank'
        role='button'
      >
        {buttonText}
      </a>
    </div>
  )
}
