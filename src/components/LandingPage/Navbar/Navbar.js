import React, { useState } from 'react'

import { FaTimes } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from './NavbarStyles'
import { useLocation, useHistory } from 'react-router-dom'
import { data } from '../../../data/NavbarData'

function Navbar() {
  const [show, setShow] = useState(false)

  let history = useHistory()
  let location = useLocation()

  const handleClick = () => {
    setShow(!show)
  }

  const scrollTo = (id) => {
    const element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const closeMobileMenu = (to, id, otherPage) => {
    if(otherPage){
      window.location.href=to;
    }else{
      if (id && location.pathname === '/') {
        scrollTo(id)
      }
      history.push(to)
      setShow(false)
    }

  }

  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" alt=""/>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks
                  onClick={() => {
                    closeMobileMenu(el.to, el.id, el.otherPage)
                  }}
                >
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
