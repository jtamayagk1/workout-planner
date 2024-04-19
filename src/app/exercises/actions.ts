'use server'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createExercise(formData: FormData){
  try {
    const createExercise = await prisma.exercises.create({
      data:{
        name: formData.get('exercise') as string
      }
    })
    revalidatePath('/exercises')
  } catch (error) {
    console.log(error)
  }

}

export async function deleteExercise(id: number) {
  try {
    const shouldRemove = window.confirm("are you sure you want to delete?")
    const deleteExercise = await prisma.exercises.delete({
      where: {
        id: id
      }
    })
    revalidatePath('/exercises')
  } catch (error) {
    console.log(error)
  }
}

export async function updateExercise(exercise: any, newName: string){
  try {
    const updateExercise = await prisma.exercises.update({
      where: {
        id: exercise.id
      },
      data: {
        name: newName
      }
    })
    revalidatePath('/exercises')
  } catch (error) {
    console.log(error)
  }
}