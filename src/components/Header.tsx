import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom"
import { LuListCollapse } from "react-icons/lu";
import { useState, useEffect } from 'react' 
const Header = () => {

    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    const [open, setOpen] = useState(false);

    function handleClick(): void{

        setOpen((prev) => !prev)
    }
    function handleClose(): void{
        setOpen((prev) => !prev)
    }
    
    useEffect(()=>{

        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () =>window.removeEventListener('resize', handleResize);

    }, [])

let display: boolean = false;
let displayLarge: boolean = false;

const dontSHow = {
    display: open? 'none': 'block'
}
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const nonActiveStyles = {
        fontWeight: "400",
    }

    if(mobile == true && open == true){
        display = true;
    }
    // console.log('display', display);
    // console.log('mobile', mobile);
    if(mobile == false && display == false){
        displayLarge = true;
    }
  return (
    <>
        <header>
            <div className="container-head" style={{flexDirection: display? 'column': 'row'}}>
                
                    <><NavLink to={'/'}><h1>#LORRYDORM</h1></NavLink>
                    {displayLarge && <nav className="navv"> 
                        
                        <NavLink 
                            to={'host'} 
                    style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
                            >
                            Host</NavLink>
                        <NavLink to={'about'}
                        style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }

                        >About</NavLink>
                        <NavLink to={'lorry'}                         style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
>Lorries</NavLink>
                        <NavLink to={'login'}                         style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
 ><CgProfile className="avatar"/></NavLink>
                    </nav>}



                    {display &&
                    <nav className="navv">
                        <button onClick={handleClose}>X</button>
                        <NavLink to={'host'}                         style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
>Host</NavLink>
                        <NavLink to={'about'}                         style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
>About</NavLink>
                        <NavLink to={'lorry'}                         style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
>Lorries</NavLink>
                        <NavLink to={'login'}                         style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
><CgProfile className="avatar"/></NavLink>
                    </nav>}
                    </>
                
                    {mobile && <LuListCollapse style={{color: 'black', fontSize: '2rem', ...dontSHow}}  onClick = {handleClick}/>}

            </div>
        </header>
    
    </>
  )
}

export default Header