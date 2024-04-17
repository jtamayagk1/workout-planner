'use client'

import { createExercise } from "./actions";
import { useRef } from "react";

export default function ExerciseForm(){
  const ref = useRef<HTMLFormElement>(null)
  return(
    <form ref={ref} action={async (formData) => {
      await createExercise(formData)
      ref.current?.reset()
      }} className="jusify-items-center">
      <input className="block text-black p-1" type="text" name="exercise" placeholder="Add Exercise"/>
      <button type="submit" className="w-full mt-3 bg-violet-600">Submit</button>
    </form>
  );
}