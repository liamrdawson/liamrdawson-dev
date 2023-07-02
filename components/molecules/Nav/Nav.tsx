'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import LinkAtom from '@/components/atoms/Link/Link'
import style from './nav.module.css'

interface INavLink {
  path: string
  name: string
}

interface Props {
  navLinks: INavLink[]
}

function isActiveLink(currentPathname: string, linkName: string) {
  return currentPathname === linkName
}

const hoverLinkMotion = {
  rest: {
    x: '-101%',
  },
  hover: {
    x: '0%',
  },
}

const Nav = ({ navLinks }: Props) => {
  const pathName = usePathname()

  return (
    <nav className={style.nav}>
      <ul>
        {navLinks.map((navLink) => (
          <motion.li
            key={`navLink-${navLinks.indexOf(navLink)}`}
            data-active={isActiveLink(pathName, navLink.path)}
            className={style.nav}
            initial="rest"
            whileHover="hover"
          >
            <span className={style['link-wrapper']}>
              <LinkAtom path={navLink.path} name={navLink.name} />
              <motion.div
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                variants={hoverLinkMotion}
                className={style.underline}
              />
            </span>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
