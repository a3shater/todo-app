
import { Task } from "@/types/tasks";


const baseUrl = "http://localhost:4000";

export async function getAllTodos(): Promise<Task[]> {
    const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
    const todos = await res.json();
    return todos;
}

export async function addTodo(todo: Task): Promise<Task> {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = (await res).json()

    return newTodo
}

export async function editTodo(todo: Task) {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updatedTodo = (await res).json()
    return updatedTodo
}

export async function deleteTodo(id: string) {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: "DELETE",
    })
}

export async function gets(itemId: string) {
    const res = await fetch(`${baseUrl}/tasks/${itemId}`);
    const todos = await res.json();
    return todos;
}