import style from './button.module.css'

interface Props {
  value: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const PrimaryButton = ({ value, onClick }: Props) => (
  <button className={style.button} type="button" onClick={onClick}>
    {value}
  </button>
)
