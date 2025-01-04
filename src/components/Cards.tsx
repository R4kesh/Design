import React from 'react'
import { GlowingStarsBackgroundCard } from './ui/glowing-stars'
import Card3 from './Card3'
import Tooltips from './Tooltips'
import GoogleInputInput from './GoogleInput'

const Cards = () => {
  return (
    <div className="flex items-center justify-center h-full"> {/* Flex container to center the content */}
      {/* <GlowingStarsBackgroundCard /> */}
       <Card3/>
      <Tooltips/>
      <GoogleInputInput/>
    </div>
  )
}

export default Cards
