import { useState } from "react";

const FormBuilder = () => {
  const [questions, setQuestions] = useState([]);
  const [formTitle, setFormTitle] = useState("");

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), type: "text", label: "" }]);
  };

  const handleQuestionChange = (id, key, value) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, [key]: value } : q)));
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleSaveForm = () => {
    const formData = {
      title: formTitle,
      questions,
    };

    // You can replace this with an API call to save the form
    console.log("Saved Form Data:", formData);
    alert("Form saved successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Form Builder</h1>

        {/* Form Title Input */}
        <div className="mb-6">
          <label htmlFor="formTitle" className="block text-gray-700 font-medium mb-2">
            Form Title
          </label>
          <input
            type="text"
            id="formTitle"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter form title"
          />
        </div>

        {/* Dynamic Questions */}
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="flex items-center bg-white shadow-md p-4 rounded-lg"
            >
              <input
                type="text"
                value={question.label}
                onChange={(e) =>
                  handleQuestionChange(question.id, "label", e.target.value)
                }
                className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
                placeholder={`Question ${index + 1}`}
              />
              <button
                onClick={() => deleteQuestion(question.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                &#10005;
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={addQuestion}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          >
            Add Question
          </button>
          <button
            onClick={handleSaveForm}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          >
            Save Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
