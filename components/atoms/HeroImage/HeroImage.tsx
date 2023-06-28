import Image, { StaticImageData } from 'next/image'
import style from './hero-image.module.css'

interface Props {
  imageData: StaticImageData
  alt: string
}

const HeroImage = ({ imageData, alt }: Props) => {
  const { src, blurDataURL } = imageData
  return (
    <div className={style['hero-image']}>
      <Image src={src} alt={alt} blurDataURL={blurDataURL} placeholder="blur" fill />
    </div>
  )
}

export default HeroImage
