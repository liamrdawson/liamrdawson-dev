/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { VideoPlayer } from '../../molecules/VideoPlayer'
import { ITheme } from '../../Theme/theme'

const BannerContainer = styled.div`
  min-height: 800px;
  height: 90vh;
  width: 100%;
  background: ${(props) => props.theme.colour.primary};
  flex-direction: row;
`

const heroHeadingStyle = (theme: ITheme) => css`
  color: ${theme.colour.secondary};
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  font-style: italic;
  font-family: ${theme.typography.heroFont.style.fontFamily};
  font-weight: ${theme.typography.typeWeight.interBlack};
`

const iCreateStyles = css`
  display: flex;
  flex-direction: row;
  font-size: clamp(50px, 8vw, 125px);
  padding-left: 1vw;
  justify-content: space-between;
`

const memorableStyles = css`
  margin: 0 auto;
  font-size: clamp(90px, 12vw, 188px);
  margin-top: 49;
  margin-bottom: 49px;
  width: 100%;
`

const experiencesStyles = css`
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
    <h1 tabIndex={0} css={heroHeadingStyle}>
      <span css={iCreateStyles}>
        <span>I create </span>
        <VideoPlayer src="/aboutVid.mp4" />
        <VideoPlayer src="/aboutVid.mp4" />
      </span>
      <span css={memorableStyles}>memorable</span>
      <span css={experiencesStyles}>
        <VideoPlayer src="/aboutVid.mp4" />
        <span> experiences</span>
      </span>
    </h1>
  </BannerContainer>
)
