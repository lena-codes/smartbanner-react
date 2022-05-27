import React, { CSSProperties } from 'react'
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
  buttonColor?: string
  closeIconColor?: string
}

export type Theme = 'light' | 'dark'

export const SmartBanner: React.FC<SmartBannerProps> = ({
  src,
  title,
  author,
  description,
  buttonText,
  buttonLink,
  theme = 'light',
  onClose,
  background,
  titleColor,
  textColor,
  buttonColor,
  closeIconColor
}) => {
  const backgroundStyle: CSSProperties = background
    ? { background: background }
    : {}
  const titleStyle: CSSProperties = titleColor ? { color: titleColor } : {}
  const textStyle: CSSProperties = textColor ? { color: textColor } : {}
  const buttonColorStyle: CSSProperties = buttonColor
    ? { backgroundColor: buttonColor }
    : {}
  return (
    <div className={`smartbanner smartbanner-${theme}`} style={backgroundStyle}>
      <div className='smartbanner-row'>
        {onClose && (
          <button
            type='button'
            onClick={onClose}
            className='smartbanner-close-button'
          >
            <CloseIcon theme={theme} fill={closeIconColor} />
          </button>
        )}
        <div className='smartbanner-row smartbanner-space-right'>
          <img src={src} role='presentation' className='smartbanner-img' />
          <div className='smartbanner-column smartbanner-space-left'>
            <p
              className={`smartbanner-title smartbanner-title-${theme}`}
              style={titleStyle}
            >
              {title}
            </p>
            <p
              className='smartbanner-text smartbanner-small-font'
              style={textStyle}
            >
              {author}
            </p>
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
        style={buttonColorStyle}
      >
        {buttonText}
      </a>
    </div>
  )
}
