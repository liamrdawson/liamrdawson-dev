import style from './video-player.module.css'

type VideoPlayerProps = {
  src: string
}

export const VideoPlayer = ({ src }: VideoPlayerProps) => (
  <div className={style['video-player']}>
    <video autoPlay loop playsInline src={src} preload="metadata" muted />
  </div>
)
