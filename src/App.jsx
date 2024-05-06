import React from "react";

import "./App.css";
function App() {
  let employees = [
    {
      name: "Maaz khan",
      position: "Software Engineer",
      university: "University of Swat",
      img: "https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw",
    },
    {
      name: "Aziz khan",
      position: "Data Analyst",
      university: "University of science",
      img: "https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw",
    },
    {
      name: "Imran khan",
      position: "Project Manager",
      university: "University of Somewhere",
      img: "https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw",
    },
    {
      name: "Umar",
      position: "HR Manager",
      university: "University of Lahore",
      img: "https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw",
    },

    {
      name: "Zahid",
      position: "Customer Representative",
      university: "University of Punjab",
      img :"https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw" },
    {
      name: "Abdul",
      position: "Product Manager",
      university: "Product Development Institute",
      img :"https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw"  },
    {
      name: "Ali",
      position: "Quality Assurance Engineer",
      university: "Quality Assurance University",
      img :"https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw"  },
    {
      name: "Rayyan",
      position: "Operations Manager",
      university: "Operations College",
      img :"https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw"  },
    {
      name: "Nawaz Sharif",
      position: "Business Analyst",
      university: "Business School",
      img :"https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw" }
  ];

  return (
    <div className="main">
      {employees.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt="John" style={{ width: "100%" }} />
          <h1>{item.name}</h1>
          <p className="title">{item.position}</p>
          <p>{item.university}</p>
          <p>
            <button>Contact</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
