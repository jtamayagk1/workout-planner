import prisma from "@/lib/prisma";

export default function Home() {
  const exercises = prisma.exercises.findMany()
  console.log("EX " + exercises)

  return (
    <main>
      <h1>Hello World2</h1>
    </main>
  );
}
