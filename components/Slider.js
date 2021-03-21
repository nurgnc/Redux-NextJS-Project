import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styles from '../styles/Slider.module.css'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={styles.slider}>
            <FaArrowAltCircleLeft className={styles.leftarrow} onClick={prevSlide}/>
            <FaArrowAltCircleRight className={styles.rightarrow} onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index} >
                        {index === current && (<img src={slide.image} alt="Slider Image" className={styles.image}/>)}
                    </div>
                )
            })}
        </section>
    );
};

export default Slider

