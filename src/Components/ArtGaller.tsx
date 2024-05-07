'use client'
import React from 'react'
import Image from 'next/image'

import one from '../assets/art/as.png';

export const ArtGaller = () => {
  return (
    <div className='bigger-padding'>
      
    <Image src={one} alt='Fun' width={500} height={700} className='image-skew img-fluid'></Image>

    </div>
  )
}
