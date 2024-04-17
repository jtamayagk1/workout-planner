
import Planner from "./planner/planner";

export default async function Home() {

  return (
    <main className="flex flex-col justify-center">
      <div className="text-center my-3">
        <h1>Workouts</h1>
      </div>
      <div className="flex flex-row w-full h-screen">
        <div className="w-1/3 text-center">
          <h1>Plan Workout</h1>
          <Planner />
        </div>
        <div className="w-1/3 text-center">
          <h1>Post Workout</h1>
        </div>
        <div className="w-1/3 text-center">
          <h1>Analyze</h1>
        </div>
      </div>
    </main>
  );
}
