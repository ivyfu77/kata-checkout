import { Outlet, Link } from "react-router-dom"

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
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
