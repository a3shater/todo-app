import { Modal } from "@/components/Modal";
import TodoList from "@/components/TodoList";
import { Button } from "@/components/ui/button";
import { getAllTodos } from "@/lib/api";
import { Plus } from "lucide-react";


export default async function Home() {
    const tasks = await getAllTodos();
    const Action = <Button className="uppercase">Add<Plus size={25} className="ml-2" /></Button>;
    return (
        <>
            <nav className="p-5 bg-black text-white text-center text-3xl">
                <marquee>fdasfas</marquee>
            </nav>
            <main className="max-w-4xl mx-auto mt-4">

                <div className=" my-5 flex flex-col gap-4 ">
                    <div className="flex justify-between align-center px-3">
                        <h1 className="text-2xl font-bold text-center">Todo List App</h1>
                        <Modal Action={Action} actionNumber={1} />
                    </div>
                    <TodoList tasks={tasks} />
                </div>
            </main></>
    );
}
