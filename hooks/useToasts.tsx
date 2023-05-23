import { useContext } from 'react'
import { ToastType } from '../features/Toast/Toast'
import { ToastContext } from '../features/Toast/ToastProvider'

function useToasts() {
  const { pushToastRef } = useContext(ToastContext)

  return { pushToast: (toast: ToastType) => pushToastRef.current(toast) }
}

export default useToasts
