/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { HeroHeading } from '@/components/atoms/Heading/Heading'
import TextSlider from '../../molecules/TextSlider/TextSlider'
import HeroImage from '../../molecules/HeroImage/HeroImage'
import style from './hero-banner.module.css'

export const HeroBanner = () => (
  <div className={style.container}>
    <HeroHeading>
      <TextSlider initialValue="100%" endValue="0%" axis="y" delay={0.4} duration={0.2}>
        I build
      </TextSlider>
      <TextSlider initialValue="100%" endValue="0%" axis="y" delay={0.42} duration={0.2}>
        digital
      </TextSlider>
      <TextSlider initialValue="100%" endValue="0%" axis="y" delay={0.44} duration={0.2}>
        experiences
      </TextSlider>
      <TextSlider initialValue="100%" endValue="0%" axis="y" delay={0.46} duration={0.2}>
        that are
      </TextSlider>
      <TextSlider initialValue="100%" endValue="0%" axis="y" delay={0.48} duration={0.2}>
        impossible
      </TextSlider>
      <TextSlider initialValue="100%" endValue="0%" axis="y" delay={0.5} duration={0.2}>
        to forget.
      </TextSlider>
    </HeroHeading>
    <HeroImage />
  </div>
)
