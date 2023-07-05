/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { HeroHeading } from '@/components/atoms/Heading/Heading'
import { VideoPlayer } from '@/components/molecules/VideoPlayer/VideoPlayer'
import style from './hero-banner.module.css'

export const HeroBanner = () => (
  <div className={style.container}>
    <HeroHeading>
      <div className={style['row-one']}>
        <span>I create </span>
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
      </div>
      <div className={style['row-two']}>memorable</div>
      <div className={style['row-three']}>
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
        <span> experiences</span>
      </div>
    </HeroHeading>
  </div>
)
