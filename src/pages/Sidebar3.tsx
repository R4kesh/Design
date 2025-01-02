// Sidebar2.js
import React from 'react'
import CustomStyling from '../components/CustomStyling'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Card2 from '../components/Card2'
import { BackgroundGradient } from '../components/ui/background-gradient'

const Sidebar3 = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures the sidebar is at the left and header is at the top */}
      <div className="bg-white shadow-md p-4"> {/* Header section */}
        <Header />
      </div>
      <div className="flex flex-grow mb-8"> {/* Main content area */}
        <div className="w-76 bg-white shadow-md p-2 top-0"> {/* Sidebar, no margin or extra gap */}
          <CustomStyling />
        </div>

        <div className="flex-grow"> {/* Content area, fill the rest of the space */}
         <Card2/>
         {/* <BackgroundGradient/> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar3
