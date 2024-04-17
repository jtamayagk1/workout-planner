'use client'
import { useState } from "react";
import Button from "../components/Button";

export default function Planner(){
  const [inputFields, setInputFields] = useState([{'exercise':'push ups'}, {'exercise':'squats'}, {'exercise':''}])

  function handleFormChange(index: number, event: any){
    let data = [...inputFields]
    data[index]['exercise'] = event.target.value
    setInputFields(data)
  }

  function addInputs(){
    let newInput = {'exercise':''}
    setInputFields([...inputFields, newInput])
  }

  return(
    <form action="" className="flex flex-col items-center">
      {inputFields.map((input, index) => {
        return(
          <input key={index} className="w-1/2 mx-1 my-2 p-1 text-black" placeholder="Exercise" value={input.exercise}
            onChange={(e) => {
              handleFormChange(index, e)
            }}>
          </input>
        )
      })}
      <div className="flex">
        <Button content="Add" color='bg-blue-400' onClick={addInputs}/>
        <Button content="Save" color='bg-green-500'/>
      </div>
    </form>
  );
}