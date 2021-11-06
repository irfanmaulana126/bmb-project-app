import React from 'react'
import Hero from '../components/LandingPage/Hero/Hero'
import Features from '../components/LandingPage/Features/Features'
import {Content} from '../components/LandingPage/Content/Content'
import Carousel from '../components/LandingPage/Carousel/Carousel'

import {heroOne, heroTwo, heroThree} from '../data/HeroData'

function Home() {
    return (        
		<>
            <Hero/>
            <Features />
            <Content {...heroOne} />
            <Content {...heroTwo} />
            <Content {...heroThree} />
            <Carousel />
        </>
    )
}

export default Home
