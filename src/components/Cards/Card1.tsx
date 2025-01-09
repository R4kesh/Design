import React from 'react';
import styled from 'styled-components';
import { FaNotesMedical, FaClipboardList, FaAllergies, FaFileMedical, FaPrescription, FaMicroscope, FaHeartbeat, FaUserMd, FaPills, FaFileAlt, FaProcedures, FaClipboardCheck, FaFileExport } from 'react-icons/fa';

const Card1 = () => {
  const cardData = [
    { title: 'Notes', icon: <FaNotesMedical />, content: 'Patient notes and observations...', type: 'text' },
    { title: 'Plan Summary', icon: <FaClipboardList />, content: 'Summary of treatment plans...', type: 'text' },
    { title: 'Allergies', icon: <FaAllergies />, content: 'List of known allergies...', type: 'table', tableData: [['Peanuts', 'Severe'], ['Dust', 'Mild'], ['Pollen', 'Moderate']] },
    { title: 'Orders', icon: <FaFileMedical />, content: 'Medical orders and prescriptions...', type: 'text' },
    { title: 'Results', icon: <FaMicroscope />, content: 'Lab results and diagnostic reports...', type: 'table', tableData: [['Blood Test', 'Normal'], ['X-Ray', 'Clear'], ['MRI', 'Pending']] },
    { title: 'Vitals', icon: <FaHeartbeat />, content: 'Vital signs: BP, Heart Rate...', type: 'text' },
    { title: 'Medications', icon: <FaPills />, content: 'Current medications and dosages...', type: 'text' },
    { title: 'History', icon: <FaFileAlt />, content: 'Patient medical history...', type: 'text' },
    { title: 'Procedures', icon: <FaProcedures />, content: 'Details of medical procedures...', type: 'text' },
    { title: 'Tests', icon: <FaClipboardCheck />, content: 'Scheduled tests and follow-ups...', type: 'underline', underlineData: ['Blood Test - Scheduled', 'MRI Scan - Pending'] },
    { title: 'Reports', icon: <FaFileExport />, content: 'Exported medical reports...', type: 'text' },
    { title: 'Consultations', icon: <FaUserMd />, content: 'Scheduled consultations...', type: 'text' },
    { title: 'Prescriptions', icon: <FaPrescription />, content: 'List of issued prescriptions...', type: 'underline', underlineData: ['Paracetamol - 500mg', 'Ibuprofen - 200mg'] }
  ];

  return (
    <StyledContainer>
      {cardData.map((card, index) => (
        <StyledCard key={index} cardType={card.type}>
          <CardHeader>
            {card.icon}
            <h3>{card.title}</h3>
          </CardHeader>
          <CardContent>
            {card.type === 'table' ? (
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {card.tableData.map((row, i) => (
                    <tr key={i}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : card.type === 'underline' ? (
              <ul>
                {card.underlineData.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{card.content}</p>
            )}
          </CardContent>
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 10px;
  padding: 10px;
  background-color: #f5f5f5;
`;
const StyledCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Dynamically adjust the height based on the content type */
  grid-row-end: span ${(props) =>
    props.cardType === 'table' ? 3 : props.cardType === 'underline' ? 2 : 1};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  color: #003366;
  font-size: 14px;
  font-weight: bold;

  svg {
    font-size: 18px;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  color: #333;
  font-size: 12px;
  line-height: 1.4;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      border-bottom: 1px solid #ddd;
      padding: 4px 0;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 12px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 4px 8px;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

export default Card1;
