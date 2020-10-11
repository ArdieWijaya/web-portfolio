import React from 'react'
import HeroSection from '../../HeroSection';
import Typical from 'react-typical'
import './Home.css'

function Home() {
    return (
        <>
        <div className='title-top'>
            <img src='https://avatars3.githubusercontent.com/u/18372049?s=460&v=4' alt="Logo"></img>
            <h1><Typical
                loop={Infinity}
                wrapper="b"
                steps={['Hello, my name is Ardie 👋', 2000]} />
            </h1> 
            <p><Typical
                loop={Infinity}
                wrapper="p"
                steps={['A UI/UX designer skilled in UI designing, UX research currently studying in School of Computer Science of Bina Nusantara University (Binus).', 2000]} />
            </p> 
        </div>
       </>
    )
}

export default Home
