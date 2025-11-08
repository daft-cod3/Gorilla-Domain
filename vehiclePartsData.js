


export const vehicleParts = [
  {
    id: "engine",
    name: "Engine",
    description: "The engine is the heart of the vehicle, converting fuel into mechanical power to move the car.",
    position: { x: 50, y: 30 },
    images: ["/vehicle-parts/engine.jpg", "/vehicle-parts/engine1.jpg", "/vehicle-parts/engine2.jpg", "/vehicle-parts/engine3.jpg"]
  },
  {
    id: "transmission",
    name: "Transmission",
    description: "The transmission transfers power from the engine to the wheels, controlling speed and torque.",
    position: { x: 70, y: 40 },
    images: ["/vehicle-parts/transmission.jpg", "/vehicle-parts/transmission1.jpg",
       "/vehicle-parts/transmission2.jpeg", "/vehicle-parts/transmission3.jpg"]
  },
  {
    id: "brakes",
    name: "Brakes",
    description: "Brakes slow down or stop the vehicle by converting kinetic energy into heat.",
    position: { x: 30, y: 60 },
    images: ["/vehicle-parts/brakes.jpg", "/vehicle-parts/brakes1.jpg", "/vehicle-parts/brakes2.jpg", "/vehicle-parts/brakes3.jpg"]
  },
  {
    id: "steering",
    name: "Steering Wheel",
    description: "The steering wheel allows the driver to control the direction of the vehicle.",
    position: { x: 20, y: 20 },
    images: ["/vehicle-parts/steering.jpg", "/vehicle-parts/steering1.jpg", "/vehicle-parts/steering2.jpg", "/vehicle-parts/steering3.jpg"]
  },
  {
    id: "tires",
    name: "Tires",
    description: "Tires provide traction, support the vehicle's weight, and absorb road shocks.",
    position: { x: 40, y: 80 },
    images: ["/vehicle-parts/tires.jpg", "/vehicle-parts/transmission.jpg", "/vehicle-parts/brakes.jpg", "/vehicle-parts/engine.jpg"]
  },
];

export const vehiclePartsQuizzes = [
  {
    name: "Quiz 1",
    questions: [
      {
        question: "What is the primary function of the engine?",
        options: [
          "To provide steering control",
          "To convert fuel into mechanical power",
          "To slow down the vehicle",
          "To support the vehicle's weight",
        ],
        correctAnswer: "To convert fuel into mechanical power",
      },
      {
        question: "Which component transfers power from the engine to the wheels?",
        options: ["Brakes", "Steering Wheel", "Transmission", "Tires"],
        correctAnswer: "Transmission",
      },
      {
        question: "Identify this vehicle part:",
        image: "/vehicle-parts/engine.jpg",
        options: ["Engine", "Transmission", "Brakes", "Steering Wheel"],
        correctAnswer: "Engine",
      },
      {
        question: "What do brakes do?",
        options: [
          "Convert fuel into power",
          "Control vehicle direction",
          "Slow down or stop the vehicle",
          "Absorb road shocks",
        ],
        correctAnswer: "Slow down or stop the vehicle",
      },
    ],
  },
  {
    name: "Quiz 2",
    questions: [
      {
        question: "What is the main purpose of tires?",
        options: [
          "Convert kinetic energy into heat",
          "Provide traction and support weight",
          "Transfer power from engine",
          "Control vehicle direction",
        ],
        correctAnswer: "Provide traction and support weight",
      },
      {
        question: "Identify this vehicle part:",
        image: "/vehicle-parts/brakes.jpg",
        options: ["Engine", "Brakes", "Steering Wheel", "Tires"],
        correctAnswer: "Brakes",
      },
      {
        question: "Which part allows the driver to control the direction?",
        options: ["Engine", "Transmission", "Steering Wheel", "Brakes"],
        correctAnswer: "Steering Wheel",
      },
      {
        question: "Identify this vehicle part:",
        image: "/vehicle-parts/transmission.jpg",
        options: ["Transmission", "Engine", "Tires", "Brakes"],
        correctAnswer: "Transmission",
      },
    ],
  },
  {
    name: "Quiz 3",
    questions: [
      {
        question: "What converts kinetic energy into heat?",
        options: ["Engine", "Transmission", "Brakes", "Tires"],
        correctAnswer: "Brakes",
      },
      {
        question: "Identify this vehicle part:",
        image: "/vehicle-parts/steering.jpg",
        options: ["Steering Wheel", "Engine", "Transmission", "Brakes"],
        correctAnswer: "Steering Wheel",
      },
      {
        question: "Which part absorbs road shocks?",
        options: ["Engine", "Brakes", "Tires", "Transmission"],
        correctAnswer: "Tires",
      },
      {
        question: "Identify this vehicle part:",
        image: "/vehicle-parts/tires.jpg",
        options: ["Tires", "Brakes", "Engine", "Steering Wheel"],
        correctAnswer: "Tires",
      },
    ],
  },
];
