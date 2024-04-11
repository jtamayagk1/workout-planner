import prisma from "@/lib/prisma"

export default async function exercises() {
  const exercises = await prisma.exercises.findMany()
  console.log("ex " + exercises)
  return(
    <h1>EX</h1>
  )
}