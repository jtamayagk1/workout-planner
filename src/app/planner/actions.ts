'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createWorkout(formData: FormData, exercises: Array<object>){
  try {
    const createWorkout = await prisma.workouts.create({
      data: {
        name: formData.get('workout') as string,
        exercises: exercises
      }
    })
    revalidatePath('/')
  } catch (error) {
    console.log(error)
  }
}