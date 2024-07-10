import { toast } from 'react-hot-toast'

export const ErrorToast = ({ msg }: { msg: string }) => toast.error(msg)
