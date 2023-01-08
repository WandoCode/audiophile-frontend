interface Props {
  children: React.ReactNode
  loading: boolean
}

function LoadStateWrapper({ children, loading }: Props) {
  if (loading) return <div className="load-screen"></div>
  else return <>{children}</>
}

export default LoadStateWrapper
