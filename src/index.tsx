import React from 'react'
import './styles.module.css'

interface Props {
  src: string
  name: string
  author: string
  description: string
  buttonLink: string
  buttonText: string
}

export const SmartBanner: React.FC<Props> = ({
  src,
  name,
  author,
  description,
  buttonText,
  buttonLink
}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100vw',
        minWidth: '300px',
        maxHeight: '10vh',
        minHeight: '65px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1vh',
        background: 'WhiteSmoke'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          src={src}
          role='presentation'
          style={{ maxHeight: '64px', maxWidth: '64px', borderRadius: '20%' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '10px'
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
              color: 'grey'
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
              color: 'grey'
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <a
        href={buttonLink}
        target='_blank'
        role='button'
        style={{
          marginRight: '10px',
          textDecoration: 'none',
          fontSize: '18px'
        }}
      >
        {buttonText}
      </a>
    </div>
  )
}
