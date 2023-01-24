import { useCallback, useContext, useState, useMemo } from 'react'
import Toast, { ToastType } from './Toast'
import { ToastContext } from './ToastProvider'

export type ToastItem = ToastType & { id: number; timer: NodeJS.Timeout }

function Toasts() {
  const { pushToastRef } = useContext(ToastContext)
  const [toasts, setToasts] = useState<ToastItem[]>([])

  pushToastRef.current = useCallback(
    (toast) => {
      const id = Date.now()
      const timer = setTimeout(() => removeToast(id), toast.duration * 1000)

      const toastItem: ToastItem = { ...toast, id, timer }
      setToasts((allToasts) => [...allToasts, toastItem])
    },
    [pushToastRef]
  )

  const removeToast = (toastId: number) => {
    setToasts((t) => t.filter((toast) => toast.id !== toastId))
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const toastIdStr = e.currentTarget.getAttribute('data-id')
    if (toastIdStr) {
      const toastId = parseInt(toastIdStr, 10)
      const toast = toasts.find((t) => t.id === toastId)
      clearTimeout(toast?.timer)
      removeToast(toastId)
    }
  }

  const toastsDOM = useMemo(() => {
    return toasts.map((toast) => (
      <div className="toast-wrapper" onClick={handleClick} data-id={toast.id}>
        <Toast {...toast} />
      </div>
    ))
  }, [toasts])

  return (
    <ul className="toasts">
      <TransitionGroup component={'ul'}>{toastsDOM}</TransitionGroup>
    </ul>
  )
}

export default Toasts
