import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './App.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [city, setCity] = useState('');
  const [education, setEducation] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dob, setDob] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [gotra, setGotra] = useState('');
  const [nakshatra, setNakshatra] = useState('');
  const [photo, setPhoto] = useState(null);
  const [bioData, setBioData] = useState(null);

  const bioDataRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming photo is uploaded and stored separately, we just use the name here
    const photoUrl = photo ? photo.name : '';
    const data = {
      name,
      age,
      gender,
      occupation,
      city,
      education,
      fatherName,
      motherName,
      dob,
      birthTime,
      birthPlace,
      gotra,
      nakshatra,
      photoUrl
    };
    setBioData(data);
  };

  const downloadBioData = () => {
    if (bioDataRef.current) {
      toPng(bioDataRef.current)
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'bio-data.png';
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
          console.error('Error generating image:', error);
        });
    }
  };
  return (
    <Container>
      <h1>Biodata Generator for Marriage</h1>
      <Form onSubmit={handleSubmit} className="custom-form">
        <h2>Personal Details</h2>
        <Row>
          <Col md={4}>
            <Form.Group controlId="name">
              <Form.Label>Name (नाव)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name (तुमचे पुर्ण नाव प्रविष्ट करा)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="age">
              <Form.Label>Age (वय)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age (तुमचे वय प्रविष्ट करा)"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="gender">
              <Form.Label>Gender (लिंग)</Form.Label>
              <Form.Control
                as="select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="custom-input"
              >
                <option value="">Select gender (लिंग निवडा)</option>
                <option value="male">Male (पुरुष)</option>
                <option value="female">Female (स्त्री)</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Education and Occupation */}
        <h2>Education and Occupation</h2>
        <Row>
          <Col md={4}>
            <Form.Group controlId="occupation">
              <Form.Label>Occupation (व्यवसाय)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your occupation (तुमचा व्यवसाय प्रविष्ट करा)"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="city">
              <Form.Label>City (शहर)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city (तुमचे शहर प्रविष्ट करा)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="education">
              <Form.Label>Education (शिक्षण)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your education (तुमचा शिक्षण प्रविष्ट करा)"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Family Details */}
        <h2>Family Details</h2>
        <Row>
          <Col md={4}>
            <Form.Group controlId="fatherName">
              <Form.Label>Father's Name (वडीलांचे नाव)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your father's full name (तुमच्या वडीलांचे पुर्ण नाव प्रविष्ट करा)"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="motherName">
              <Form.Label>Mother's Name (आईचे नाव)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mother's full name (तुमच्या आईचे पुर्ण नाव प्रविष्ट करा)"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Birth Details */}
        <h2>Birth Details</h2>
        <Row>
          <Col md={4}>
            <Form.Group controlId="dob">
              <Form.Label>Date of Birth (जन्म तारीख)</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="birthTime">
              <Form.Label>Birth Time (जन्म वेळ)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your birth time (तुमचा जन्म वेळ प्रविष्ट करा)"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="birthPlace">
              <Form.Label>Birth Place (जन्म ठिकाण)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your birth place (तुमचा जन्म ठिकाण प्रविष्ट करा)"
                value={birthPlace}
                onChange={(e) => setBirthPlace(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Astrology Details */}
        <h2>Astrology Details</h2>
        <Row>
          <Col md={4}>
            <Form.Group controlId="gotra">
              <Form.Label>Gotra (गोत्र)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your gotra (तुमचे गोत्र प्रविष्ट करा)"
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="nakshatra">
              <Form.Label>Nakshatra (नक्षत्र)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your nakshatra (तुमचे नक्षत्र प्रविष्ट करा)"
                value={nakshatra}
                onChange={(e) => setNakshatra(e.target.value)}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Photo */}
        <h2>Photo (फोटो)</h2>
        <Row>
          <Col md={4}>
            <Form.Group controlId="photo">
              <Form.Label>Upload Your Photo (तुमची फोटो अपलोड करा)</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Generate Biodata (बायोडाटा तयार करा)
        </Button>
      </Form>
      <Container className="background-image">
        <h1>विवाहस्य बायोडाटा तयार करणारे</h1>
        <Form onSubmit={handleSubmit} className="custom-form">
          {/* form fields... */}
        </Form>

        <div ref={bioDataRef}>
          {bioData && (
            <div className="biodata">
              <h2>तुमचा बायोडाटा</h2>
              {Object.entries(bioData).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
              ))}
            </div>
          )}
        </div>

        {bioData && (
          <Button variant="primary" onClick={downloadBioData}>छायाचित्र म्हणून बायोडाटा डाउनलोड करा</Button>
        )}
      </Container>

      {bioData && (
        <Button variant="primary" onClick={downloadBioData}>Download Biodata (बायोडाटा डाउनलोड करा)</Button>
      )}
      <br/><br/>
    </Container>
  );
}

export default App;



