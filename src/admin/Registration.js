import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRadio
}
from 'mdb-react-ui-kit';


function Registration() {
    const [selectedOption, setSelectedOption] = useState('');
    const [showTextBox, setShowTextBox] = useState(false);
    const [showTextBox2, setShowTextBox2] = useState(false);
    const [selectOption2, setSelectedOption2] = useState('');
  const [numberOfFloors, setNumberOfFloors] = useState(0);
  const [textBoxValue, setTextBoxValue] = useState('');

  const handleNumberOfFloorsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfFloors(value);
  };
  
  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    if (option === 'Open Parking') {
      setShowTextBox(false);
      setShowTextBox2(true); 
    } else {
      setShowTextBox2(false);
    }
  };
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      if (option === 'By floor') {
        setShowTextBox(true); 
        setShowTextBox2(false);
      } else {
        setShowTextBox(false);
      }
    };

  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>

            <MDBDropdown className="mb-4">
              <MDBDropdownToggle color="primary" size="lg">
                Choose Parking Design
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem
                  disabled
                  onClick={() => handleOptionSelect('Choose option')}
                >
                  Choose option
                </MDBDropdownItem>
                <MDBDropdownItem onClick={() => handleOptionSelect2('Open Parking')}>
                  Open Parking
                </MDBDropdownItem>
                <MDBDropdownItem onClick={() => handleOptionSelect('By floor')}>
                  By floor
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            {showTextBox2 && (
              <MDBInput
              label="Text Box"
              id="textBox"
              type="text"
              onChange={(e) => setTextBoxValue(e.target.value)} 
              />
            )}
            {showTextBox && (
              <div>
                <MDBInput
                  label="Number of Floors"
                  id="numberOfFloors"
                  type="number"
                  value={numberOfFloors}
                  onChange={handleNumberOfFloorsChange}
                />

                {numberOfFloors > 0 && (
                  <div>
                    <label htmlFor="floorSelect">Select Floor</label>
                    <select id="floorSelect" className="form-select mb-4" size="lg">
                      {Array.from({ length: numberOfFloors }, (_, i) => (
                        <option key={i + 1} value={i + 1}>Floor {i + 1}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}
            <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Registration;
