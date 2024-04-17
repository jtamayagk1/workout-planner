'use client'
import ExerciseCard from "../components/ExerciseCard";
import ExerciseForm from "./form";
import { useState } from "react";
import { updateExercise } from "./actions";

interface Exercise {
  id: number;
  name: string | null;
}

interface ExerciseListProps {
  exercises: Exercise[];
}

export default function ExerciseList({ exercises }: ExerciseListProps){
  const [inputValue, setInputValue] = useState('')
  
  return(
    <>
      <div className="flex justify-center p-4">
        <ExerciseForm/>
      </div>  
      <div className="grid grid-cols-3 gap-3 place-content-center h-48">
        {exercises.map((exercise: any) => {
          return <ExerciseCard key={exercise.id} exercise={exercise} />
        })}
      </div>
    </>
  )
}