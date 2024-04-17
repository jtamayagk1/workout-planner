
import ExerciseForm from "./form";
import ExerciseCard from "../components/ExerciseCard";
import { BsFillPencilFill } from "react-icons/bs";
import prisma from "@/lib/prisma";
import ExerciseList from "./list";

export default async function Exercises() {

  const exercises = await prisma.exercises.findMany()
  return (
    <div className="flex-col justify-items-center w-1/2">
      <h1 className="text-center text-2xl my-2">Exercises</h1> 
      <ExerciseList exercises={exercises}/>
    </div>
  );
}