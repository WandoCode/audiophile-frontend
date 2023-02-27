import { SVGLoader } from '../../stories/Atoms'

function FallBackLoader() {
  return (
    <>
      <div className="load-screen">
        <div className="loader-screen__icon">
          <SVGLoader />
        </div>
      </div>
    </>
  )
}

export default FallBackLoader
