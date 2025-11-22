import { NavLink, Outlet } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiMenuBurger } from "react-icons/ci";
import UseCart from "../Hooks/UseCart";
import { FaUtensilSpoon } from "react-icons/fa";
import { FaThList } from "react-icons/fa";  
import { LiaFirstOrder } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
   //  const {cart} = UseCart;
    const [isAdmin] = useAdmin()  

    return (<div className="m-auto w-[1000px]">
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 my-2 gap-2">
       
                   {
                    isAdmin ? <>    
                    <li>
                    <NavLink to='/dashboard/adminHome'>
                    <FaHome></FaHome>
                    Admin Home</NavLink>
                 </li>   
                 <li>
                    <NavLink to='/dashboard/addItems'>
                     <FaUtensilSpoon/>
                    Add Items</NavLink>
                 </li>
                 <li>
                    <NavLink to='/dashboard/manageItems'>
                    <FaThList />
                    Manage Items</NavLink>
                 </li>
                 <li>
                    <NavLink to='/dashboard/bookings'>
                    <LiaFirstOrder />
                    Manage Items</NavLink>
                 </li>
                 <li>
                    <NavLink to='/dashboard/allUsers'>
                    <FaUsers />
                    All Users</NavLink>
                 </li>
                    </>
                    : 
                    <> <li>
                    <NavLink to='/dashboard/cd'>
                    <FaHome></FaHome>
                    User Home</NavLink>
                 </li>   
                 <li>
                    <NavLink to='/dashboard/car'>
                     <SlCalender/>
                    Calender</NavLink>
                 </li>
                 <li>
                    <NavLink to='/dashboard/cart'>
                    <BsCartFill></BsCartFill>
                    My cart</NavLink>
                 </li></>
                   }

                    <div className="divider"></div>

                    <li>
                       <NavLink to='/'>
                       <FaHome></FaHome>
                        Home</NavLink>
                    </li> 
                    <li>
                       <NavLink to='/menu'>
                       <CiMenuBurger></CiMenuBurger>
                        Menu</NavLink>
                    </li> 

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div></div>
    );
};

export default DashBoard;