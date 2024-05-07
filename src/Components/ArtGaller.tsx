'use client'
import React from 'react'
import Image from 'next/image'

import one from '../assets/images/as.png';

export const ArtGaller = () => {
  return (
    <div className='bigger-padding'>
      
    <Image src={one} alt='Fun' width={500} height={700} className='image-skew'></Image>

    </div>
  )
}
