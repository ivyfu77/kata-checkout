import { Outlet, Link } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <div id="sidebar" className="kata-sidebar-container">
        <nav>
          <div className="kata-sidebar-nav-item">
            <Link to={``} className="kata-sidebar-nav-link">
              Home
            </Link>
          </div>
          <div className="kata-sidebar-nav-item">
            <Link to={`rules`} className="kata-sidebar-nav-link">
              Set Rules
            </Link>
          </div>
          <div className="kata-sidebar-nav-item">
            <Link to={`checkout`} className="kata-sidebar-nav-link">
              Checkout
            </Link>
          </div>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
