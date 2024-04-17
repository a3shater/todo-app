"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addTodo, deleteTodo, editTodo, gets } from "@/lib/api"
import { useRouter } from 'next/navigation'
import { Task } from "@/types/tasks"
import { useEffect, useState } from "react"
const { v4: uuidv4 } = require('uuid');


const formSchema = z.object({
    id: z.string(),
    text: z.string().min(6, { message: "Text must be at least 6 letters" })
})
const newFormSchema = formSchema.omit({ id: true })

export function TodoForm({ actionNumber, itemId }: { actionNumber: number, itemId: string }) {
    const router = useRouter()

    const [values, setData] = useState<{ text: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await gets(itemId);
            setData({
                text: res.text
            })
        };
        fetchData();
    }, []);
    // 1. Define your form.
    const form = useForm<z.infer<typeof newFormSchema>>(
        {
            resolver: zodResolver(newFormSchema),
            defaultValues: {
                text: ""
            },
            values
        }
    )

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof newFormSchema>) {
        if (actionNumber === 1) {
            const data: Task = {
                ...values,
                id: uuidv4()
            };
            await addTodo(data)
        }
        else if (actionNumber === 2) {
            const data: Task = {
                ...values,
                id: itemId
            };
            setData(values)
            await editTodo(data)

        }
        router.refresh()
        form.reset()

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2 ">
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input placeholder="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    )
}