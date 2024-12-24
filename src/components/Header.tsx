import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <>
        <header>
            <div className="container-head">
                <NavLink to={'/'}><h1>#LORRYDORM</h1></NavLink>
            <nav>
                <NavLink to={'host'}>Host</NavLink>
                <NavLink to={'about'}>About</NavLink>
                <NavLink to={'lorry'}>Lorries</NavLink>
                <NavLink to={'login'} ><CgProfile className="avatar"/></NavLink>
            </nav>
            </div>
        </header>
    
    </>
  )
}

export default Header