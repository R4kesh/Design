// import React,{useState} from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Form1 = () => {

//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/dataSave/getEmail', { email });
//       alert(response.data.message || 'Email saved successfully!');
//       setEmail(''); // Clear the input field
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || 'An error occurred!');
//     }
//   };
//   return (
//     <StyledWrapper>
//     <div className="card">
//       <span className="card__title">Subscribe</span>
//       <p className="card__content">
//         Get fresh web design resources delivered straight to your inbox every week.
//       </p>
//       <form className="card__form" onSubmit={handleSubmit}>
//         <input
//           placeholder="Your Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit" className="sign-up">
//           Sign up
//         </button>
//       </form>
//     </div>
//   </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     width: 240px;
//     height: 254px;
//     padding: 0 15px;
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     gap: 12px;
//     background: #fff;
//     border-radius: 20px;
//   }

//   .card > * {
//     margin: 0;
//   }

//   .card__title {
//     font-size: 23px;
//     font-weight: 900;
//     color: #333;
//   }

//   .card__content {
//     font-size: 13px;
//     line-height: 18px;
//     color: #333;
//   }

//   .card__form {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }

//   .card__form input {
//     margin-top: 10px;
//     outline: 0;
//     background: rgb(255, 255, 255);
//     box-shadow: transparent 0px 0px 0px 1px inset;
//     padding: 0.6em;
//     border-radius: 14px;
//     border: 1px solid #333;
//     color: black;
//   }

//   .card__form button {
//     border: 0;
//     background: #111;
//     color: #fff;
//     padding: 0.68em;
//     border-radius: 14px;
//     font-weight: bold;
//   }

//   .sign-up:hover {
//     opacity: 0.8;
//   }`;

// export default Form1;


import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Form1 = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');
  const [formData, setFormData] = useState({
    personalDetails: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: '',
      contactNumber: '',
      email: '',
    },
    medicalHistory: {
      pastConditions: '',
      knownAllergies: '',
      chronicIllnesses: '',
    },
    currentMedication: {
      medications: '',
      dosageInstructions: '',
    },
    insuranceDetails: {
      insuranceProvider: '',
      policyNumber: '',
      policyExpiryDate: '',
    },
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (tab, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [tab]: {
        ...prevState[tab],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData',formData)
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/dataSave/getEmail`, formData);
      alert(response.data.message || 'Patient details saved successfully!');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'An error occurred!');
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'personalDetails' ? 'active' : ''}`}
            onClick={() => handleTabChange('personalDetails')}
          >
            Personal Details
          </button>
          <button
            className={`tab ${activeTab === 'medicalHistory' ? 'active' : ''}`}
            onClick={() => handleTabChange('medicalHistory')}
          >
            Medical History
          </button>
          <button
            className={`tab ${activeTab === 'currentMedication' ? 'active' : ''}`}
            onClick={() => handleTabChange('currentMedication')}
          >
            Current Medication
          </button>
          <button
            className={`tab ${activeTab === 'insuranceDetails' ? 'active' : ''}`}
            onClick={() => handleTabChange('insuranceDetails')}
          >
            Insurance Details
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'personalDetails' && (
            <div className="tab-panel">
              <h2>Personal Details</h2>
              <form>
                <input
                  type="text"
                  placeholder="First Name"
                  className="spaced-field"
                  value={formData.personalDetails.firstName}
                  onChange={(e) => handleChange('personalDetails', 'firstName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="spaced-field"
                  value={formData.personalDetails.lastName}
                  onChange={(e) => handleChange('personalDetails', 'lastName', e.target.value)}
                />
                <input
                  type="date"
                  className="spaced-field"
                  value={formData.personalDetails.dateOfBirth}
                  onChange={(e) => handleChange('personalDetails', 'dateOfBirth', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="spaced-field"
                  value={formData.personalDetails.address}
                  onChange={(e) => handleChange('personalDetails', 'address', e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="spaced-field"
                  value={formData.personalDetails.contactNumber}
                  onChange={(e) => handleChange('personalDetails', 'contactNumber', e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="spaced-field"
                  value={formData.personalDetails.email}
                  onChange={(e) => handleChange('personalDetails', 'email', e.target.value)}
                />
              </form>
            </div>
          )}

          {activeTab === 'medicalHistory' && (
            <div className="tab-panel">
              <h2>Medical History</h2>
              <form>
                <textarea
                  placeholder="Describe any past medical conditions"
                  className="spaced-field"
                  value={formData.medicalHistory.pastConditions}
                  onChange={(e) => handleChange('medicalHistory', 'pastConditions', e.target.value)}
                ></textarea>
                <input
                  type="text"
                  placeholder="Known Allergies"
                  className="spaced-field"
                  value={formData.medicalHistory.knownAllergies}
                  onChange={(e) => handleChange('medicalHistory', 'knownAllergies', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Chronic Illnesses"
                  className="spaced-field"
                  value={formData.medicalHistory.chronicIllnesses}
                  onChange={(e) => handleChange('medicalHistory', 'chronicIllnesses', e.target.value)}
                />
              </form>
            </div>
          )}

          {activeTab === 'currentMedication' && (
            <div className="tab-panel">
              <h2>Current Medication</h2>
              <form>
                <textarea
                  placeholder="List all current medications"
                  className="spaced-field"
                  value={formData.currentMedication.medications}
                  onChange={(e) => handleChange('currentMedication', 'medications', e.target.value)}
                ></textarea>
                <input
                  type="text"
                  placeholder="Dosage Instructions"
                  className="spaced-field"
                  value={formData.currentMedication.dosageInstructions}
                  onChange={(e) => handleChange('currentMedication', 'dosageInstructions', e.target.value)}
                />
              </form>
            </div>
          )}

          {activeTab === 'insuranceDetails' && (
            <div className="tab-panel">
              <h2>Insurance Details</h2>
              <form>
                <input
                  type="text"
                  placeholder="Insurance Provider"
                  className="spaced-field"
                  value={formData.insuranceDetails.insuranceProvider}
                  onChange={(e) => handleChange('insuranceDetails', 'insuranceProvider', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Policy Number"
                  className="spaced-field"
                  value={formData.insuranceDetails.policyNumber}
                  onChange={(e) => handleChange('insuranceDetails', 'policyNumber', e.target.value)}
                />
                <input
                  type="date"
                  className="spaced-field"
                  value={formData.insuranceDetails.policyExpiryDate}
                  onChange={(e) => handleChange('insuranceDetails', 'policyExpiryDate', e.target.value)}
                />
              </form>
            </div>
          )}
        </div>

        <div className="form-actions">
          <button className="save-button" onClick={handleSubmit}>Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 80%;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }

  .tabs {
    display: flex;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }

  .tab {
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #555;
  }

  .tab.active {
    border-bottom: 3px solid #007bff;
    color: #007bff;
  }

  .tab-content {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .tab-panel {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  .spaced-field {
    margin-bottom: 15px;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }

  .save-button, .cancel-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  .save-button {
    background-color: #007bff;
    color: #fff;
  }

  .cancel-button {
    background-color: #dc3545;
    color: #fff;
  }

  .save-button:hover {
    background-color: #0056b3;
  }

  .cancel-button:hover {
    background-color: #a71d2a;
  }
`;

export default Form1;


