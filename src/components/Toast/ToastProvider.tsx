import { PropsWithChildren, createContext, useRef } from 'react'
import { ToastType } from './Toast'
import Toasts from './Toasts'

const defaultPush = (toast: ToastType) => {}
const defaultValue = {
  pushToastRef: { current: defaultPush },
}

export const ToastContext = createContext(defaultValue)

function ToastProvider({ children }: PropsWithChildren) {
  const pushToastRef = useRef(defaultPush)

  return (
    <ToastContext.Provider value={{ pushToastRef }}>
      <Toasts />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
