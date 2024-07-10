import { toast } from 'react-hot-toast'

export const SuccessToast = ({ msg }: { msg: string }) => toast.success(msg)
