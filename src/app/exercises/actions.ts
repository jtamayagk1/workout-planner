'use server'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createExercise(formData: FormData){
  const createExercise = await prisma.exercises.create({
    data:{
      name: formData.get('exercise') as string
    }
  })
  revalidatePath('/exercises')
}

export async function deleteExercise(id: number) {
  const shouldRemove = window.confirm("are you sure you want to delete?")
  const deleteExercise = await prisma.exercises.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/exercises')
}

export async function updateExercise(exercise: any, newName: string){
  const updateExercise = await prisma.exercises.update({
    where: {
      id: exercise.id
    },
    data: {
      name: newName
    }
  })
  revalidatePath('/exercises')
}