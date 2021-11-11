import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Flex } from '../../../globalStyles'
import { HeroText,HeroButton , HeroSection,Image } from './HeroStyles'

function Hero() {
    return (
        <HeroSection>
            <Container>
            <Flex>                
                <HeroText>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Link to="/signup">
                        <HeroButton>Get Started</HeroButton>
                    </Link>
                </HeroText>
                <Image src='./assets/illustration-mockups.svg' alt=''/>
            </Flex>
            </Container>
        </HeroSection>
    )
}

export default Hero
