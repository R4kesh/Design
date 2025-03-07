import React from 'react';
import styled from 'styled-components';

const Form2= () => {
  return (
    <StyledWrapper>
      <div className="testbox">
        <form action="/">
          <p id="h1">Feedback Form</p>
          <p id="h4">Name</p>
          <input placeholder="Enter your full name" type="text" className="input" />
          <p id="h4">Email<span>*</span></p>
          <input placeholder="Enter your email" type="text" className="input" />
          <p id="h4">What is your overall impression?<span>*</span></p>
          <table>
            <tbody><tr>
                <th className="first-col" />
                <th>Very Satisfied</th>
                <th>Satisfied</th>
                <th>Unsatisfied</th>
                <th>Very Unsatisfied</th>
              </tr>
              <tr>
                <td className="first-col">Professional</td>
                <td><input name="point#2" defaultValue="none" type="radio" /></td>
                <td><input name="point#2" defaultValue="none" type="radio" /></td>
                <td><input name="point#2" defaultValue="none" type="radio" /></td>
                <td><input name="point#2" defaultValue="none" type="radio" /></td>
              </tr>
            </tbody></table>
          <p id="h4">Feel free to add any other comments or suggestions:</p>
          <textarea rows={5} defaultValue={""} />
          <div className="btn-block">
            <button href="/" type="submit">Send Feedback</button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  form, p {
    padding: 0;
    margin: 0;
    outline: none;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    line-height: 13px;
    border-radius: 10px;
  }

  #h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  #h4 {
    margin: 20px 0 2px;
    color: #000;
  }

  .testbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 80px;
  }

  form {
    width: 100%;
    padding: 20px;
    background: #EBEBE1;
    box-shadow: 0 2px 5px #ccc;
  }

  .input {
    width: calc(100% - 10px);
    padding: 5px;
    border: 1px solid #000;
    border-radius: 3px;
    vertical-align: middle;
    background-color: #F7F7F7;
  }

  .input:hover, textarea:hover {
    outline: none;
    border: 1px solid #000;
  }

  .first-name {
    margin-bottom: 5px;
  }

  th, td {
    width: 21%;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
    text-align: center;
    vertical-align: set;
    line-height: 18px;
    font-weight: 400;
    word-break: break-all;
  }

  .first-col {
    width: 16%;
    text-align: left;
  }

  table {
    width: 100%;
  }

  textarea {
    width: calc(100% - 6px);
    background: #F7F7F7;
    border-radius: 5px;
  }

  .btn-block {
    margin-top: 20px;
    text-align: center;
  }

  button {
    width: 150px;
    padding: 10px;
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: #F3D153;
    font-size: 16px;
    color: #000;
    cursor: pointer;
  }

  button:hover {
    opacity: .9;
  }

  @media (min-width: 568px) {
    th, td {
      word-break: keep-all;
    }
  }`;

export default Form2;
