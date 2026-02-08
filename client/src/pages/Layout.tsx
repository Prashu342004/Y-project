import { Footer } from "../components/Footer"
import { MobileNavbar } from "../components/MobileNavbar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <MobileNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout