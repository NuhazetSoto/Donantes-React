import React, { useState } from "react";
import "./TestPrevio.css";
import {
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";

export default function TestPrevio() {
  const questions = [
    "¿Has donado en los últimos 3 meses?",
    "¿Se encuentra bien de salud?",
    "¿Está tomando o ha tomado en los últimos días algún medicamento?",
    "En las últimas semanas, ¿Ha tenido fiebre o algún malestar notable?",
    "¿Se encuentra bien de salud?",
    "¿Ha estado en contacto con alguna persona que padezca una enfermedad infecciosa?",
    "Desde la última donación y en los meses previos a hoy, ¿Ha tenido que acudir al médico?",
    "¿Ha sido sometido a alguna intervención, exploración o un nuevo tratamiento?",
    "¿Se ha realizado algún tatuaje o perforación?",
    "¿Ha tenido contacto accidental con la sangre de otra persona, por pinchazo accidental o salpicadura",
    "¿Ha convivido o mantenido contacto íntimo con alguien que tuviese hepatitis o ictericia o fuera portador del virus de la hepatitis?",
    "¿Ha realizado algún viaje (turismo, laboral, ONG, visita a la familia) a África, América, Asia u Oceanía?",
    "¿Alguno de sus familiares ha padecido Enfermedad de Creutzfeldt-Jakob?",
  ];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isValidDonor, setIsValidDonor] = useState(true);

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answer;
      if (answer === "Si" && (questionIndex === 1 || questionIndex === 4)) {
        console.log("Valid answer!");
      } else {
        console.log("Invalid answer!");
        setIsValidDonor(false);
      }
      console.log(isValidDonor);
      return updatedAnswers;
    });
  };

  const handleValidDonor = (e) => {
    isValidDonor
      ? alert("Estaremos esperandote")
      : alert("Lo sentimos pero no eres un donante valido");
  };

  const renderQuestions = (questions) => {
    return questions.map((question, index) => (
      <div key={index} className="form">
        <Typography className="heading" variant="h6">
          {question}
        </Typography>
        <RadioGroup
          className="radio-group"
          value={selectedAnswers[index] || ""}
          onChange={(e) => handleAnswerChange(index, e.target.value)}
        >
          <FormControlLabel
            className="radio-si"
            value="Si"
            control={<Radio />}
            label="Si"
          />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </div>
    ));
  };

  return (
    <div className="container">
      <FormGroup className="each-one">{renderQuestions(questions)}</FormGroup>
      <div>
        <Button
          sx={{ backgroundColor: '#B31410', marginLeft: '10px' }}
          variant="contained"
          color="error"
          onClick={handleValidDonor}> 
          Hacer el test
        </Button>
      </div>
    </div>
  )
}


