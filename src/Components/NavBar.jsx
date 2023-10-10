
import logo_2 from "../assets/logo_2.png";
import { NavLink } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "./Provider/AuthProvider";
import { useContext } from "react";
// import Private from "./Private";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navlinks = <>


        <ul className="flex m-5 text-xl">

            <li><NavLink className="m-4 text-sky-600 hover:text-sky-600 hover:underline" to='/'>Home</NavLink></li>
            <li> <NavLink className="m-4 text-sky-600 hover:text-red-600 hover:underline " to='/speaker'>Speaker</NavLink></li>
            <li><NavLink className="m-4 text-sky-600 hover:text-red-600 hover:underline " to='/contact'>Contact US</NavLink></li>
        </ul>
        <ul className="flex ml-[230px]">
            {
                user ?
                
                <div className=" flex">
                <img className="mr-[21px] ml-[12px] w-10 rounded-full" src={user.photoURL}/>
                <button onClick={handleLogOut} className="btn -mt-[8px] mr-[22px] ">Sign Out</button>
              </div>
                    
                    :
                    <li className="flex gap-1"><FaLock className="mt-[3px]"></FaLock> <NavLink className="mr-4  -mt:[4px]" to='/login'>Login</NavLink></li>
            }


            <div style={{ background: 'linear-gradient(to bottom right, #ff3e00, #ffbe30), #333333', paddingRight: '3px', height: '18px', marginTop: '3px', marginLeft: '-5px', marginRight: '13px' }}></div>
            <li className="flex gap-1"><FaUser className="mt-[3px]"></FaUser> <NavLink className="mr-4  -mt:[4px]" to='/register'>Register</NavLink></li>
        </ul>

       



    </>

    return (
        <div>
            <div className="navbar  bg-[#E5E5E533]" >

                <div className="navbar-start">

                    <div className="items-start m-11">
                        <div className="flex gap-4">
                            <img src={logo_2} alt="" />
                            <h2 className=" text-3xl font-bold  " >CodeCRAFTERS</h2>
                        </div>
                        <h4 className="ml-[87px] -mt-[28px] font-semibold text-left text-yellow-500">EVENT MANAGEMENT</h4>

                    </div>

                </div>
                <div className="navbar-center">

                    {navlinks}

                </div>

            </div>
        </div>
    );
};

export default NavBar;

