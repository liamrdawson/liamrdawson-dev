/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import styled from 'styled-components'
import { Heading } from '../../atoms/Heading'
import { VideoPlayer } from '../../molecules/VideoPlayer'

const BannerContainer = styled.div`
  overflow-x: hidden;
  min-height: 700px;
  height: 90vh;
  width: 100%;
  background: var(--color-background-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeroHeading = styled(Heading)`
  color: var(--color-text-inverse-base);
  font-family: var(--font-family-hero);
  font-weight: var(--font-weight-hero);
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  font-style: italic;
`

const RowOne = styled.span`
  display: flex;
  flex-direction: row;
  font-size: clamp(50px, 8vw, 125px);
  padding-left: 1vw;
  justify-content: space-between;
  span {
    white-space: nowrap;
  }
`

const RowTwo = styled.span`
  margin: 0 auto;
  font-size: clamp(90px, 12vw, 188px);
  margin-top: 49;
  margin-bottom: 49px;
  width: 100%;
`

const RowThree = styled.span`
  display: flex;
  flex-direction: row;
  font-size: clamp(50px, 8vw, 125px);
  justify-content: space-between;
  span {
    padding-right: 1vw;
  }
`

export const HeroBanner = () => (
  <BannerContainer>
    <HeroHeading tabIndex={0}>
      <RowOne>
        <span>I create </span>
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
      </RowOne>
      <RowTwo>memorable</RowTwo>
      <RowThree>
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
        <span> experiences</span>
      </RowThree>
    </HeroHeading>
  </BannerContainer>
)
