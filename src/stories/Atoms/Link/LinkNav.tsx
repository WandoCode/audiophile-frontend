import { NavLink } from 'react-router-dom'

interface Props {
  path: string
  text?: string
}

function LinkNav({ path, text }: Props) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? 'nav-link nav-link--active' : 'nav-link'
      }
    >
      {text?.toUpperCase()}
    </NavLink>
  )
}

export { LinkNav }
