import { Heading } from '@/components/atoms/Heading/Heading'
import Link from 'next/link'
import style from './footer.module.css'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className={style.footer}>
      <div className={style.contact}>
        <div className={style['email-cta']}>
          <p>
            I collaborate with ambitious businesses who want to build something special.{' '}
            <span className={style['no-wrap']}>Let’s talk.</span>
          </p>
          <a href="mailto:hello@liamrdawson.com">hello@liamrdawson.com</a>
        </div>
        <div className={style.socials}>
          <Heading as="h4">Social</Heading>
          <ul className={style.list}>
            <li>
              <Link href="https://www.instagram.com/liam_r_dawson/">Instagram</Link>
            </li>
            <li>
              <Link href="https://twitter.com/LiamRDawson">Twitter</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/liamrdawson/">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.copyright}>
        <p>Copyright &copy; {date} Liam Dawson</p>
      </div>
    </footer>
  )
}

export default Footer
