'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteTodo } from "@/lib/api"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function DeleteModal({ Action, itemId }: { Action: React.ReactNode, itemId: string }) {
    const router = useRouter()
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {Action}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will delete data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild><Button
                        onClick={
                            async () => {
                                await deleteTodo(itemId)
                                router.refresh()
                            }
                        }
                    >Continue</Button></AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
