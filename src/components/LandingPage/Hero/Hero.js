import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Flex } from '../../../globalStyles'
import { HeroText, HeroButton, HeroSection, Image } from './HeroStyles'

function Hero() {
  return (
    <HeroSection>
      <Container>
        <Flex>
          <HeroText>
            <h1>Temukan pengelolaan pembelajaran yang efektif dan efisien</h1>
            <p>
              Kami menyediakan Sistem Informasi Pembelajaran (SIP) dan Learning
              Management System (LMS) yang dapat digunakan masing-masing
              Perguruan Tinggi dalam operasional perkuliahan serta proses
              pembelajaran antar Perguruan Tinggi (MBKM). Sistem informasi yang
              dibangun mempunyai kehandalan, keamanan dan mengutamakan aspek
              keberlanjutan. Sistem Informasi Pembelajaran ini juga mengadaptasi
              KKNI dan OBE, sehingga memudahkan Perguruan Tinggi dalam
              mempersiapkan Akreditasi Internasional
            </p>
            <Link to="/cobagratis">
              <HeroButton>Coba gratis sekarang!</HeroButton>
            </Link>
          </HeroText>
          <Image src="./assets/svg/Artboard1.svg" alt="" />
        </Flex>
      </Container>
    </HeroSection>
  )
}

export default Hero
