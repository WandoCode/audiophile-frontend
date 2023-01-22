import loaderIcon from '../assets/loadingIcon.svg'

interface Props {
  children: React.ReactNode
  loading: boolean
}

function LoadStateWrapper({ children, loading }: Props) {
  const loaderClass = () => {
    let base = 'load-screen '
    if (!loading) base += 'load-screen--inactive'
    return base
  }

  return (
    <>
      <div className={loaderClass()}>
        <div className="loader-icon">
          <img src={loaderIcon} alt="Loading icon" />
        </div>
      </div>
      {children}
    </>
  )
}

export default LoadStateWrapper
