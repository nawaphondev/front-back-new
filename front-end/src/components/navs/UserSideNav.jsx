/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority"
import useAuth from "@/hooks/useAuth";
import Icons from "@/components/ui/Icons";

const navButtonClass = "px-4 py-6 flex gap-x-2"

export default function UserSideNav() {
  const navigate = useNavigate()
  const {logout} = useAuth()

  function hdlLogout() {
    try {
      logout()
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }
  const {pathname} = useLocation()
  
  return (
    <nav className='flex flex-col w-3/12 border shadow-xl h-min justify-evenly'>
      <NavButton title="Dashboard" path="/account" activePath={pathname}><Icons.dashboard/></NavButton>
      <NavButton title="Profile" path="/account/profile" activePath={pathname}><Icons.smile /></NavButton>
      <NavButton title="Orders" path="/account/orders" activePath={pathname}><Icons.stack /></NavButton>
      <NavButton title="Addresses" path="/account/address" activePath={pathname}><Icons.notebook /></NavButton>
      <NavButton title="Cards" path="/account/card" activePath={pathname}><Icons.creditCard /></NavButton>
      <Link className={cn(navButtonClass, "w-full text-[#8B8E99] hover:text-primary")} to="#" onClick={hdlLogout}>
        <Icons.logout /> logout
      </Link>
    </nav>
  )
}

function NavButton(props) {
  const {title, path, activePath, className, children} = props
  const variant = path === activePath ? "active" : "default"
  const buttonVariants = cva(
    navButtonClass,
    {
      variants: {
        variant: {
          default:
            "text-[#8B8E99] hover:text-primary",
          active:
          "bg-primary bg-opacity-10 text-primary-foreground",
        }
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

  return <NavLink to={path} state={{from: activePath}} className={cn(buttonVariants({variant, className}))}>
    {children}{title} 
  </NavLink>
}