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
  background?: string
  onClose?: () => {} | void
  textColor?: string
}

const SmartBanner: React.FC<SmartBannerProps> = ({
  src,
  name,
  author,
  description,
  buttonText,
  buttonLink,
  background,
  onClose,
  textColor
}) => {
  return (
    <div
      className='banner'
      style={{
        background: background ?? 'WhiteSmoke'
      }}
    >
      <div className='row'>
        {onClose && (
          <button type='button' onClick={onClose}>
            <CloseIcon fill={undefined} height={undefined} width={undefined} />
          </button>
        )}
        <div
          className='row'
          style={{
            marginRight: '10px'
          }}
        >
          <img src={src} role='presentation' />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '6px'
            }}
          >
            <p
              style={{
                fontSize: '16px',
                marginTop: '0',
                marginBottom: '5px',
                height: '15px'
              }}
            >
              {name}
            </p>
            <p
              style={{
                marginTop: '0',
                marginBottom: '0',
                height: '15px',
                fontSize: '12px',
                color: textColor ?? 'grey'
              }}
            >
              {author}
            </p>
            <p
              style={{
                marginTop: '0',
                marginBottom: '5px',
                height: '15px',
                fontSize: '14px',
                color: textColor ?? 'grey'
              }}
            >
              {description}
            </p>
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
