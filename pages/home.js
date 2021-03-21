import React from 'react'
import Slider from '../Slider'
import { SliderData } from '../SliderData'
import Head from 'next/head'

function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/shopping-cart.svg" />
            </Head>
            <Slider slides={SliderData} />
        </div>
    )
}

export default Home
