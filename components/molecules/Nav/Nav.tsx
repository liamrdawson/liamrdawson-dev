'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

import LinkAtom from '@/components/atoms/Link/Link'
import TextSlider from '@/components/molecules/TextSlider/TextSlider'
import style from './nav.module.css'

interface INavLink {
  path: string
  name: string
}

interface Props {
  navLinks: INavLink[]
}

const hoverLinkMotion = (restState: string) => ({
  rest: {
    x: restState,
  },
  hover: {
    x: '0%',
  },
})

const Nav = ({ navLinks }: Props) => {
  const pathName = usePathname()
  const [activeLink, setActiveLink] = useState(pathName)

  const isActiveLink = (currentPathname: string, linkName: string) => currentPathname === linkName
  const getRestState = (path: string) => (activeLink === path ? '0%' : '-101%')

  return (
    <nav className={style.nav}>
      <ul>
        {navLinks.map((navLink) => (
          <TextSlider
            initialValue="100%"
            endValue="0%"
            axis="y"
            delay={0.5}
            duration={0.2}
            key={`navLink-${navLinks.indexOf(navLink)}`}
            styleVal={{ height: '16px', width: '100%' }}
          >
            <motion.li
              data-active={isActiveLink(pathName, navLink.path)}
              className={style.nav}
              initial="rest"
              whileHover="hover"
              onClick={() => setActiveLink(navLink.path)}
            >
              <span className={style['link-wrapper']}>
                <LinkAtom path={navLink.path} name={navLink.name} />
                <motion.div
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  variants={hoverLinkMotion(getRestState(navLink.path))}
                  className={style.underline}
                  key={activeLink}
                />
              </span>
            </motion.li>
          </TextSlider>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
