import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import UseCart from '../../../Hooks/UseCart';

const FoodCard = ({item}) => {
    const {image, price, name, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseCart()

    const handleAddToCart = () => {
        if(user && user.email){
            //send cart item to the database
            console.log( user.email);
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title: `${name} Added To Cart`,
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                      //refetch cart to update the cart items count
                      refetch()
                }
            })
             
        }else{
            Swal.fire({
                title: "You are not Logged!",
                text: "Please Login Now",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from : location}})
                }
              });
        }
    }

    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-yellow-50 font-bold text-2xl'>$ {price}</p>
            <div className="card-body flex flex-col  items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-2 border-orange-500 text-slate-700 text-slate-800 ">Add To cart</button>
                </div>
            </div>
            </div>  
        </div>
    );
};

export default FoodCard;