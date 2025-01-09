// import React from 'react';
// import styled from 'styled-components';

// const TabCard = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="header">
//           <div className="top">
//             <div className="circle">
//               <span className="red circle2" />
//             </div>
//             <div className="circle">
//               <span className="yellow circle2" />
//             </div>
//             <div className="circle">
//               <span className="green circle2" />
//             </div>
//             <div className="title">
//               <p id="title2">style.css</p>
//             </div>
//           </div>
//         </div>
//         <div className="code-container">
//           <textarea className="area" id="code" name="code" readOnly defaultValue={"\n.card {\n  width: 300px;\n  height: 400px;\n  margin: 0 auto;\n  background-color: #24233b;\n  border-radius: 8px;\n  z-index: 1;\n  box-shadow: 0px 10px 10px rgb(73, 70, 92);\n  transition: 0.5s;\n}\n\n.card:hover {\n  transform: translateY(-7px);\n  box-shadow: 0px 10px 10px black;\n}\n\n.top {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}"} />
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     width: 500px;
//     height: 400px;
//     margin: 0 auto;
//     background-color: #24233b;
//     border-radius: 8px;
//     z-index: 1;
//     box-shadow: 0px 10px 10px rgb(73, 70, 92);
//     transition: 0.5s;
//   }

//   .card:hover {
//     transform: translateY(-7px);
//     box-shadow: 0px 10px 10px black;
//   }

//   .top {
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
//   }

//   .circle {
//     padding: 0 4px;
//   }

//   .circle2 {
//     display: inline-block;
//     align-items: center;
//     width: 10px;
//     height: 10px;
//     padding: 1px;
//     border-radius: 5px;
//   }

//   .red {
//     background-color: #ff605c;
//   }

//   .yellow {
//     background-color: #ffbd44;
//   }

//   .green {
//     background-color: #00ca4e;
//   }

//   .header {
//     margin: 5px;
//     margin-top: 5px;
//     border-radius: 5px;
//   }

//   #title2 {
//     color: white;
//     padding-left: 50px;
//     font-size: 15px;
//   }

//   .code-container {
//     text-align: center;
//   }
//   #code {
//     width: 470px;
//     height: 350px;
//     resize: none;
//     background-color: rgb(73, 70, 92);
//     border-radius: 5px;
//     border: none;
//     color: white;
//     padding: 10px;
//   }
//   #code:focus {
//     outline: none !important;
//   }`;

// export default TabCard;



// import React, { useState } from "react";

// const TabCard = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     { title: "Tab 1", content: "This is the content of Tab 1" },
//     { title: "Tab 2", content: "This is the content of Tab 2" },
//     { title: "Tab 3", content: "This is the content of Tab 3" },
//   ];

//   return (
//     <div className="w-full max-w-2xl mx-auto mt-10">
//       <div className="flex space-x-4 border-b-2">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`py-2 px-4 text-sm font-medium ${
//               activeTab === index
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-600 hover:text-blue-600"
//             }`}
//           >
//             {tab.title}
//           </button>
//         ))}
//       </div>
//       <div className="mt-4">
//         <div className="p-4 border rounded-md shadow-sm bg-gray-50">
//           {tabs[activeTab].content}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabCard;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TabCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    addressInfo: { address: "", city: "", state: "", zip: "" },
    additionalInfo: { notes: "", preferences: "" },
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const firstInput = document.querySelector(
      `.tab-content input, .tab-content textarea`
    );
    firstInput?.focus();
  }, [activeTab]);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    toast.success("Registration Form Submitted!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleCancel = () => {
    setFormData({
      personalInfo: { name: "", email: "", phone: "" },
      addressInfo: { address: "", city: "", state: "", zip: "" },
      additionalInfo: { notes: "", preferences: "" },
    });
    toast.info("Form Reset", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const tabs = [
    { title: "Personal Info", section: "personalInfo" },
    { title: "Address Info", section: "addressInfo" },
    { title: "Additional Info", section: "additionalInfo" },
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="tab-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-lg"
      >
        <ToastContainer />
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <h2 className="font-medium text-lg">Registration Window</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xl font-bold focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-100">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-3 px-4 flex-1 text-sm font-medium transition-colors ${
                activeTab === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 tab-content">
          <motion.div
            key={activeTab}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 0 && (
              <div>
                <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                <div className="space-y-4">
                  {["name", "email", "phone"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium capitalize">
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.personalInfo[field]}
                        onChange={(e) =>
                          handleInputChange("personalInfo", field, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3 className="text-lg font-medium mb-4">Address Information</h3>
                {["address", "city", "state", "zip"].map((field) => (
                  <div key={field} className="space-y-4">
                    <label className="block text-sm font-medium capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.addressInfo[field]}
                      onChange={(e) =>
                        handleInputChange("addressInfo", field, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 className="text-lg font-medium mb-4">Additional Information</h3>
                {["notes", "preferences"].map((field) => (
                  <div key={field} className="space-y-4">
                    <label className="block text-sm font-medium capitalize">
                      {field}
                    </label>
                    {field === "notes" ? (
                      <textarea
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        value={formData.additionalInfo[field]}
                        onChange={(e) =>
                          handleInputChange("additionalInfo", field, e.target.value)
                        }
                      />
                    ) : (
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.additionalInfo[field]}
                        onChange={(e) =>
                          handleInputChange("additionalInfo", field, e.target.value)
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 px-4 py-3 bg-gray-50 rounded-b-lg">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TabCard;




// import React from 'react';
// import styled from 'styled-components';

// const TabCard = () => {
//   return (
//     <StyledWrapper>
//       <div className="card ">
//         <div className="titlebar">
//           <span className="buttons">
//             <button className="minimize">
//               <svg x="0px" y="0px" viewBox="0 0 10.2 1"><rect x={0} y="50%" width="10.2" height={1} /></svg>
//             </button>
//             <button className="maximize">
//               <svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" /></svg>
//             </button>
//             <button className="close">
//               <svg viewBox="0 0 10 10"><polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" /></svg>
//             </button>
//           </span>
//         </div>
//         <div className="cppcode">
//           <pre id="pre"><code><span className="s1">#include</span> <span className="s2">&lt;iostream&gt;</span>{"\n"}using<span className="s3"> namespace </span>std<span className="sc">;</span>{"\n"}{"\n"}<span className="s3">int</span> <span className="s2">main()</span> <span className="curlies">{"{"}</span>{"\n"}{"\n"}{"  "}<span className="s3">int</span> <span className="s4">a</span> <span className="operator">=</span> 12<span className="sc">;</span>{"\n"}{"  "}<span className="s3">int</span> <span className="s4">b</span> <span className="operator">=</span> 5<span className="sc">;</span>{"\n"}{"\n"}{"  "}<span className="s4">cout</span> <span className="s5">&lt;&lt;</span> <span className="s1">"Sum of the numbers{"\n"}{"    "}is: "</span> <span className="s5">&lt;&lt;</span> <span className="rounds">(</span><span className="s4">a </span><span className="operator">+</span><span className="s4"> b</span><span className="rounds">)</span><span className="sc">;</span>{"\n"}{"\n"}{"  "}<span className="s6">return</span> 0<span className="sc">;</span>{"\n"}{"\n"}<span className="curlies">{"}"}</span>{"\n"}{"    "}</code></pre>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     width: 500px;
//     height: 400px;
//     background: #15001f;
//     border: 1px solid #c042ff;
//     font-size: 14px;
//     font-family: monospace;
//     overflow: auto;
//   }

//   .titlebar {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     font-size: 21px;
//     font-weight: 450;
//     background-color: #2e0043;
//     width: 100%;
//     text-align: right;
//   }

//   .card button {
//     width: 40px;
//     height: 35px;
//     margin-left: -5px;
//     border: 0;
//     outline: 0;
//     background: transparent;
//     transition: 0.2s;
//   }

//   button svg path, 
//   button svg rect, 
//   button svg polygon {
//     fill: #ffffff;
//   }

//   button svg {
//     width: 10px;
//     height: 10px;
//   }

//   .close:hover {
//     background-color: #e81123;
//   }

//   .maximize:hover {
//     background-color: #c042ff2e;
//   }

//   .minimize:hover {
//     background-color: #c042ff2e;
//   }

//   #pre {
//     overflow: auto;
//     width: 100%;
//     padding: 10px;
//     height: auto;
//     color: #bafff8;
//   }

//   .curlies {
//     color: #ff0000;
//   }

//   .sc {
//     color: #e600ff;
//   }

//   .rounds {
//     color: #ffffff;
//   }

//   .operator {
//     color: #ffff00;
//   }

//   .s1 {
//     color: #22ff00;
//   }

//   .s2 {
//     color: #4281ff;
//   }

//   .s3 {
//     color: #ff4284;
//   }

//   .s4 {
//     color: #ffae00;
//   }

//   .s5 {
//     color: #ffffff;
//   }

//   .s6 {
//     color: #ffff00;
//   }`;

// export default TabCard;
