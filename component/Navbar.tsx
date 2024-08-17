const Navbar = () => {
  return (
    <nav>
        <h1>MENU - Navbar</h1>
        <hr/>
        <div className="flex justify-between ">
            <div></div>
            <div className="py-4"><a href="/">HOME</a></div>
            <div className="py-4"><a href="/about">ABOUT</a></div>
            <div className="py-4"><a href="/dashboard">DASHBOARD</a></div>
            <div className="py-4"><a href="/dashboard/setting">DASHBOARD_SETTING</a></div>
            <div></div>
        </div>
        <hr/>
    </nav>
  )
}

export default Navbar;