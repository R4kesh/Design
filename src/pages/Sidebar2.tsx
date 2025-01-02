// Sidebar2.js
import React from 'react'
import CustomStyling from '../components/CustomStyling'
import Header from '../components/Header'
import Cards from '../components/Cards'

const Sidebar2 = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures the sidebar is at the left and header is at the top */}
      <div className="bg-white shadow-md p-4"> {/* Header section */}
        <Header />
      </div>
      <div className="flex flex-grow mb-8"> {/* Main content area */}
        <div className="w-76 bg-white shadow-md p-2 top-0"> {/* Sidebar, no margin or extra gap */}
          <CustomStyling />
        </div>

        <div className="flex-grow bg-gray-100 justify-center"> {/* Content area, fill the rest of the space */}
          <Cards/>
        </div>
        
      </div>    
    </div>
  )
}

export default Sidebar2
