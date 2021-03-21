import Head from 'next/head'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'

export default function Home() {
  return (
    <div>    
      <Slider slides={SliderData} />
    </div>
  )
}
