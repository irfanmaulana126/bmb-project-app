import React from 'react'
import Hero from '../components/LandingPage/Hero/Hero'
import Features from '../components/LandingPage/Features/Features'
import {Content} from '../components/LandingPage/Content/Content'
// import Carousel from '../components/LandingPage/Carousel/Carousel'

import {heroOne, heroTwo, heroThree} from '../data/HeroData'
import Footer from '../components/LandingPage/Footer/Footer'

function Home() {
    return (        
		<>
            <Hero/>
            <Features />
            <Content {...heroOne} />
            <Content {...heroTwo} />
            <Content {...heroThree} />
            {/* <Carousel /> */}
			<Footer />
        </>
    )
}

export default Home
