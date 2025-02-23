import { FC } from 'react'

export interface ResponsiveImageSource {
  media: string
  srcSet: string
  type: string
}

interface ResponsiveImageProps extends Pick<HTMLPictureElement, 'className'> {
  alt?: string
  sources: ResponsiveImageSource[]
  src: string
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  alt,
  className,
  sources,
  src,
}) => {
  return (
    <picture>
      {sources.map(({ media, srcSet, type }) => (
        <source media={media} srcSet={srcSet} type={type} />
      ))}
      <img alt={alt} className={className} src={src} />
    </picture>
  )
}

export default ResponsiveImage
