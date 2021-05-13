import React from 'react'

interface Props {
  src: string
  author: string
  description: string
  buttonLink: string
  buttonText: string
}

export const SmartBanner: React.FC<Props> = ({
  src,
  author,
  description,
  buttonText,
  buttonLink
}: Props) => {
  return (
    <div>
      <img src={src} />
      <div>
        <p>{author}</p>
        <p>{description}</p>
      </div>
      <a href={buttonLink} role='button'>
        {buttonText}
      </a>
    </div>
  )
}
