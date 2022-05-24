import React from 'react'
import CloseIcon from '../src/Icon/CloseIcon.js'
import './index.css'

const SmartBanner = ({
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
        <button type='button' onClick={onClose}>
          <CloseIcon />
        </button>
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
