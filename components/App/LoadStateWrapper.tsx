import loaderIcon from '../../assets/loadingIcon.svg'

interface Props {
  children: React.ReactNode
  loading: boolean
}

function LoadStateWrapper({ children, loading }: Props) {
  if (loading)
    return (
      <div className="load-screen">
        <div className="loader-icon">
          <img src={loaderIcon} alt="Loading icon" />
        </div>
      </div>
    )
  else return <>{children}</>
}

export default LoadStateWrapper
