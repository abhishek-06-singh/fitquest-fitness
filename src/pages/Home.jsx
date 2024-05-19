import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Erercises from "../components/Erercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <div>
      <Hero />
      <SearchBar
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Erercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
