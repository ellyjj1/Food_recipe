import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
// import { GlobalContext } from "../../context";

function Navbar(props) {
    return (
        <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold">
                <NavLink to={"/"}>Food Recipe</NavLink>
            </h2>
            <form>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Enter items"
                    className="bg-white/75 p-3"
                />
            </form>

        </nav>


    );
}

export default Navbar;