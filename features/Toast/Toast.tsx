import Image from 'next/image'

export interface ToastType {
  title: string
  text: string
  duration: number
  type: string
  url: string
  altTxt: string
}

function Toast({ title, text, type, url, altTxt }: ToastType) {
  const toastClass = type ? `toast toast--${type}` : 'toast'

  return (
    <div className={toastClass}>
      <Image src={url} alt={altTxt} width={80} height={80} />
      <div className="toast__content">
        <h2 className="h2 h2--toast text-black">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Toast
