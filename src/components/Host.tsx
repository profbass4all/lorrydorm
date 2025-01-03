import { NavLink } from "react-router-dom"

const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const nonActiveStyles = {
        fontWeight: "400",
    }
const Host = () => {
    return (
        <div className="mt-4">
            <nav>
                <NavLink to={'.'} end style={({isActive})=> isActive? activeStyles: nonActiveStyles}>
                    Dashboard
                </NavLink>

                <NavLink to={'income'} style={({isActive})=> isActive? activeStyles: nonActiveStyles}>
                    Income
                </NavLink>

                <NavLink to={'lorries'} style={({isActive})=> isActive? activeStyles: nonActiveStyles}>
                    Lorry
                </NavLink>

                <NavLink to={'reviews'} style={({isActive})=> isActive? activeStyles: nonActiveStyles}>
                    Reviews
                </NavLink>
            </nav>
        </div>
    )
}

export default Host