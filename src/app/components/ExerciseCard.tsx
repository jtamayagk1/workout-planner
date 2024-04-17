'use client'
import { deleteExercise, updateExercise} from "../exercises/actions";
import { useState } from "react";
import { BsFillPencilFill, BsFillPatchCheckFill, BsXCircleFill } from "react-icons/bs";

export default function ExerciseCard(props: any){
  const [isEdit, setIsEdit] = useState(false)
  const [updatedExercise, setUpdatedExercise] = useState(props.exercise.name) 

  function toggleEdit(){
    setIsEdit(!isEdit)
  }

  return(
    <div className="bg-zinc-950 flex justify-between p-2 border rounded border-zinc-500">
      <div className="w-3/4">
      {isEdit ? 
        (<input className="text-black p-1 w-full" value={updatedExercise} onChange={(e) => setUpdatedExercise(e.target.value)}></input>)
        :
        (<h1 key={props.exercise.id} className="text-left p-1">{props.exercise.name}</h1>)
      }
      </div>
      <div className="flex space-x-4 w-1/4 justify-end">
      {isEdit ? 
        (<>
          <button onClick={() => deleteExercise(props.exercise.id)} >
            <BsXCircleFill style={{color:'red'}} />
          </button>
          <button onClick={() => {
            toggleEdit()
            updateExercise(props.exercise, updatedExercise)
          }}>
            <BsFillPatchCheckFill style={{color: 'green'}} />
          </button>
        </>)
        : 
        (
        <button onClick={toggleEdit}>
          <BsFillPencilFill style={{color: 'blue'}}/>
        </button>)
      }
      </div>
    </div>
  );
}