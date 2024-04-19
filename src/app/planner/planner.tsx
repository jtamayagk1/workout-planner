'use client'
import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import Button from "../components/Button";
import { useRef } from "react";
import { createWorkout } from "./actions";

export default function Planner(){
  const [inputFields, setInputFields] = useState([{'exercise':''}])
  const ref = useRef<HTMLFormElement>(null)

  function handleFormChange(index: number, event: any){
    let data = [...inputFields]
    data[index]['exercise'] = event.target.value
    setInputFields(data)
  }

  function addInput(){
    let newInput = {'exercise':''}
    setInputFields([...inputFields, newInput])
  }

  function removeInput(index: number){
    let data = [...inputFields]
    data.splice(index, 1)
    setInputFields(data)
  }


  return(
    <form className="flex flex-col items-center" ref={ref} action={async (formData) => {
      await createWorkout(formData, inputFields)
      ref.current?.reset()
    }}>
      <input type="text" name="workout" className="mx-1 my-2 p-1 text-black" placeholder="Workout name" />
      {inputFields.map((input, index) => {
        return(
          <div key={index} className="flex items-center">
            <input type="text" className="mx-1 my-2 p-1 text-black" placeholder="Exercise" value={input.exercise}
              onChange={(e) => {
                handleFormChange(index, e)
              }}/>
            <BsXCircleFill className={`mx-1 ${index == 0 ? 'invisible' : 'visible'}`} 
              style={{color:'red'}} onClick={() => {removeInput(index)}}/>
          </div>
        )
      })}
      <div className="flex">
        <Button content="Add" color='bg-blue-400' onClick={addInput}/>
        <Button content="Save" type='submit' color='bg-green-500'/>
      </div>
    </form>
  );
}