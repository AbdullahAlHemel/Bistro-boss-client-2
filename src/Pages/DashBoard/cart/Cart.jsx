import Swal from "sweetalert2";
import UseCart from "../../../Hooks/UseCart";
import { IoTrash } from "react-icons/io5";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const Cart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce( (total,item) => total + item.price , 0);
    const axiosSecure = UseAxiosSecure();

    const handleDelete = id  => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });}
                })
            }
          });
    }
    return (
        <>
        <div className="flex justify-evenly">
            <h2 className="text-3xl font-semibold">Items : <span className="font-bold">{cart.length}</span></h2>
            <h2 className="text-3xl font-semibold">Total Price :  <span className="font-bold"> {totalPrice}</span></h2>
            <button className="btn btn-primary">Pay</button>
        </div>

        <div className="overflow-x-auto">
        <table className="table">
        {/* head */}
        <thead>
            <tr>
            <th>
               #
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.map((item, index) => <tr key={item._id}>
                    <th>
                        {index +1}
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                        </div>
                        </div>
                    </td>
                    <td>
                    <div className="font-bold">{item.name}</div>
                        <br/>
                    </td>
                    <td className="text-[17px] font-semibold">$ {item.price}</td>
                    <th>
                        <button onClick={() => handleDelete(item._id)} 
                         className="btn btn-ghost btn-md rounded-[100%] p-3">
                              <IoTrash className="text-[22px] text-red-600"/>
                        </button>
                    </th>
                    </tr>)
            }
            
        </tbody>
        
        
        </table>
        </div>
</>
    );
};

export default Cart;