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
    
    if(mobile == false && display == false){
        displayLarge = true;
    }
    return (
    <>
        <header className="bg-[#fff7ed]">
            <div className="mx-auto h-full md:h-24 flex items-center h-full justify-between w-11/12" style={{flexDirection: display? 'column': 'row'}}>
                
                    <>
                        <NavLink to={'/'}><h1 className="text-black text-2xl font-black ">#LORRYDORM</h1></NavLink>

                            {displayLarge && 
                    <nav className="navv"> 
                        
                        <NavLink
                            className='hover:text-[#161616]
                                hover:underline
                                hover:decoration-solid'
                            to={'host'} 
                            style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }
                            >
                            Host
                        </NavLink>

                        <NavLink 
                            className='hover:text-[#161616]
                                hover:underline
                                hover:decoration-solid'

                            to={'about'}
                            style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }>About
                        </NavLink>

                        <NavLink 
                            className='hover:text-[#161616]
                                hover:underline
                                hover:decoration-solid'
                        
                            to={'lorry'} 
                            style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }  >Lorries
                        </NavLink>

                        <NavLink 
                        
                            className='hover:text-[#161616]'
        
                            to={'login'} style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }><CgProfile className="h-8 w-8"/>
                        </NavLink>
                    </nav>}



                    {display &&
                    <nav className="navv">
                        <button className="mt-6" onClick={handleClose}>X</button>
                        <NavLink 
                        className='hover:text-[#161616]
                                hover:underline
                                hover:decoration-solid'

                        to={'host'} style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }>Host
                        </NavLink>

                        <NavLink 
                        className='hover:text-[#161616]
                                hover:underline
                                hover:decoration-solid'
                        
                        to={'about'} style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }>About
                        </NavLink>

                        <NavLink 
                        className='hover:text-[#161616]
                                hover:underline
                                hover:decoration-solid'
                        
                        to={'lorry'} style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }>Lorries
                        </NavLink>

                        <NavLink to={'login'} style={({ isActive }) => isActive ? activeStyles:nonActiveStyles }><CgProfile className="h-8 w-8"/>
                        </NavLink>

                    </nav>}
                    </>
                
                    {mobile && <LuListCollapse className="text-black text-3xl" style={dontSHow}  onClick = {handleClick}/>}

            </div>
        </header>
    
    </>
)
}

export default Header