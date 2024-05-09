'use client'
import React from 'react'
import Image from 'next/image'

import one from '../assets/art/as.png';
import two from '..//assets/art/image0.png';
import three from '../assets/art/image1 (1).jpeg';
import four from '../assets/art/image1.jpeg';
import five from '../assets/art/image3.png';
import six from '../assets/art/image4.jpeg';

export const ArtGaller = () => {
  return (
    <div className='bigger-padding'>
      
    <Image src={one} alt='Fun' width={500} height={700} className='image-skew img-fluid'></Image>
    <Image src={two} alt='Fun' width={500} height={700} className='image-skew-smr img-fluid'></Image>
    <Image src={three} alt='Fun' width={500} height={700} className='image-skew-smr img-fluid'></Image>
    <Image src={four} alt='Fun' width={500} height={700} className='image-skew img-fluid'></Image>
    <Image src={five} alt='Fun' width={500} height={700} className='image-skew-smr img-fluid'></Image>
    <Image src={six} alt='Fun' width={500} height={700} className='image-skew img-fluid'></Image>

    </div>
  )
}
