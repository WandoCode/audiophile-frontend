import { useContext } from 'react'
import { ToastType } from '../components/Toast/Toast'
import { ToastContext } from '../components/Toast/ToastProvider'

function useToasts() {
  const { pushToastRef } = useContext(ToastContext)

  return { pushToast: (toast: ToastType) => pushToastRef.current(toast) }
}

export default useToasts
