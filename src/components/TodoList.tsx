import { Task } from "@/types/tasks"
import { SquarePen, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Button } from "./ui/button"
import { Modal } from "./Modal"
import { DeleteModal } from "./DeleteModal"
type Tasks = {
    tasks: Task[]
}
function TodoList({ tasks }: Tasks) {
    const Action2 = <Button variant="outline" size="icon">
        <SquarePen cursor={'pointer'} className="text-blue-500" size={25} />
    </Button>
    const Action3 = <Button variant="outline" size="icon">
        <Trash2 cursor={'pointer'} className="text-red-500" size={25} />
    </Button>
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow className="uppercase">
                        <TableHead >Task</TableHead>
                        <TableHead >Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks.map(task => (
                        <TableRow key={task.id}>
                            <TableCell className="w-full">{task.text}</TableCell>
                            <TableCell className="flex gap-5">
                                <Modal Action={Action2} actionNumber={2}  itemId={task.id}/>
                                <DeleteModal Action={Action3} itemId={task.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
export default TodoList