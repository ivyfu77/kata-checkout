import { Outlet, Link } from "react-router-dom"

export const Root = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={``}>Home</Link>
            </li>
            <li>
              <Link to={`rules`}>Set Rules</Link>
            </li>
            <li>
              <Link to={`checkout`}>Checkout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
