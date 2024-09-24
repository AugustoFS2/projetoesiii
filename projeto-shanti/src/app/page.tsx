import Image from "next/image";

export default async function Home() {
  const tasks = [
    {
      id: 1,
      title: "Task 1"
    },
    {
      id: 2,
      title: "Task 2"
    }
  ]

  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl font-medium">All Tasks:</h1>
      <ul className="my-10 text-center text-black">
        {tasks.map(task => <li key={task.id}>{task.title}</li>)}
      </ul>
    </main>
  );
}
