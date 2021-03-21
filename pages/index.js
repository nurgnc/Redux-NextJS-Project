import Head from 'next/head'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop App</title>
        <link rel="icon" href="/shopping-cart.svg" />
      </Head>
      
      <Slider slides={SliderData} />
    </div>
  )
}
