import { toast } from 'react-toastify'

export const Toastiy = (type: string, message: string) => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 5000))

    if (type === "success") {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER
        })
    } else if (type === "error") {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }
}