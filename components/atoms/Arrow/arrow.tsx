import style from './arrow.module.css'

type ArrowProps = {
  viewBox?: string
}

export default function Arrow({ viewBox = '0 0 30 32' }: ArrowProps): JSX.Element {
  return (
    <svg className={style.svg} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2144 18.8377L26.2175 18.8408L29.0459 16.0124L13.4896 0.456055L10.6611 3.28448L21.3701 13.9935L0.0195312 13.9935V17.9935L21.4017 17.9935L10.61 28.7852L13.4385 31.6136L26.2144 18.8377Z" />
    </svg>
  )
}