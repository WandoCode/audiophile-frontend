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
    <li className={toastClass}>
      <img src={url} alt={altTxt} />
      <div className="toast__content">
        <h2 className="h2 h2--toast text-black">{title}</h2>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default Toast
