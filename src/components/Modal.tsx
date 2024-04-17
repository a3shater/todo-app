import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TodoForm } from "./TodoForm"


export function Modal({ Action, actionNumber,itemId="" }: { Action: React.ReactNode, actionNumber: number,itemId?:string }) {
    return (
        <Dialog >
            <DialogTrigger asChild>
                {Action}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                </DialogHeader>
                <TodoForm actionNumber={actionNumber} itemId={itemId} />
            </DialogContent>
        </Dialog>
    )
}
