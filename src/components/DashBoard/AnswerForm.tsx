// import { useState } from "react";

// const AnswerForm = ({ formTitle, questions, patientName }) => {
//   const [answers, setAnswers] = useState({});

//   const handleAnswerChange = (id, value) => {
//     setAnswers({ ...answers, [id]: value });
//   };

//   const handleSubmit = () => {
//     const response = {
//       formTitle,
//       patientName,
//       answers,
//     };

//     // Replace with API call or save logic
//     console.log("Patient Response:", response);
//     alert("Answers submitted successfully!");
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-700">{formTitle}</h1>
//             <p className="text-sm text-gray-500">Patient: {patientName}</p>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
//           >
//             Submit
//           </button>
//         </div>

//         {/* Questions Section */}
//         <div className="space-y-6">
//           {questions.map((question, index) => (
//             <div key={question.id} className="space-y-2">
//               <label className="block text-gray-700 font-medium">
//                 {index + 1}. {question.label}
//               </label>
//               {/* Dynamic Answer Fields */}
//               {question.type === "text" && (
//                 <input
//                   type="text"
//                   value={answers[question.id] || ""}
//                   onChange={(e) => handleAnswerChange(question.id, e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
//                   placeholder="Type your answer here..."
//                 />
//               )}
//               {question.type === "multiple-choice" && (
//                 <select
//                   value={answers[question.id] || ""}
//                   onChange={(e) => handleAnswerChange(question.id, e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
//                 >
//                   <option value="" disabled>Select an option</option>
//                   {question.options.map((option, idx) => (
//                     <option key={idx} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               )}
//               {question.type === "checkbox" && (
//                 <div className="flex items-center space-x-4">
//                   {question.options.map((option, idx) => (
//                     <label key={idx} className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         value={option}
//                         onChange={(e) => {
//                           const selected = answers[question.id] || [];
//                           const updated = e.target.checked
//                             ? [...selected, option]
//                             : selected.filter((o) => o !== option);
//                           handleAnswerChange(question.id, updated);
//                         }}
//                         className="form-checkbox text-blue-500"
//                       />
//                       <span>{option}</span>
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Mock data for questions
// const AnswerFormPage = () => {
//   const mockFormTitle = "General Health Check";
//   const mockPatientName = "John Doe";
//   const mockQuestions = [
//     { id: 1, label: "What is your age?", type: "text" },
//     { id: 2, label: "Do you smoke?", type: "multiple-choice", options: ["Yes", "No"] },
//     { id: 3, label: "Select your symptoms:", type: "checkbox", options: ["Fever", "Cough", "Fatigue"] },
//   ];

//   return (
//     <AnswerForm
//       formTitle={mockFormTitle}
//       patientName={mockPatientName}
//       questions={mockQuestions}
//     />
//   );
// };

// export default AnswerFormPage;


import { useState } from "react";
import { motion } from "framer-motion";

const AnswerForm = ({ formTitle, questions, patientName }) => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    const response = {
      formTitle,
      patientName,
      answers,
    };

    // Replace with API call or save logic
    console.log("Patient Response:", response);
    alert("Answers submitted successfully!");
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">{formTitle}</h1>
            <p className="text-sm text-gray-600">Patient: {patientName}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            Submit
          </motion.button>
        </div>

        {/* Questions Section */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-2"
            >
              <label className="block text-blue-900 font-medium">
                {index + 1}. {question.label}
              </label>
              {/* Dynamic Answer Fields */}
              {question.type === "text" && (
                <input
                  type="text"
                  value={answers[question.id] || ""}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
                  placeholder="Type your answer here..."
                />
              )}
              {question.type === "multiple-choice" && (
                <select
                  value={answers[question.id] || ""}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="" disabled>Select an option</option>
                  {question.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {question.type === "checkbox" && (
                <div className="flex items-center space-x-4">
                  {question.options.map((option, idx) => (
                    <label key={idx} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={option}
                        onChange={(e) => {
                          const selected = answers[question.id] || [];
                          const updated = e.target.checked
                            ? [...selected, option]
                            : selected.filter((o) => o !== option);
                          handleAnswerChange(question.id, updated);
                        }}
                        className="form-checkbox text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}
              {question.type === "radio" && (
                <div className="flex items-center space-x-4">
                  {question.options.map((option, idx) => (
                    <label key={idx} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className="form-radio text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Mock data for questions
const AnswerFormPage = () => {
  const mockFormTitle = "Comprehensive Health Assessment";
  const mockPatientName = "Jane Doe";
  const mockQuestions = [
    { id: 1, label: "What is your age?", type: "text" },
    { id: 2, label: "Do you smoke?", type: "multiple-choice", options: ["Yes", "No"] },
    { id: 3, label: "Select your symptoms:", type: "checkbox", options: ["Fever", "Cough", "Fatigue", "Headache"] },
    { id: 4, label: "What is your gender?", type: "radio", options: ["Male", "Female", "Other"] },
    { id: 5, label: "Do you have a family history of diabetes?", type: "radio", options: ["Yes", "No"] },
  ];

  return (
    <AnswerForm
      formTitle={mockFormTitle}
      patientName={mockPatientName}
      questions={mockQuestions}
    />
  );
};

export default AnswerFormPage;