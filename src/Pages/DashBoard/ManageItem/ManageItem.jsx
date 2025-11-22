import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/useMenu";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

      
const ManageItem = () => {
    const [menu, , refetch] = UseMenu()
    const axiosSecure = UseAxiosSecure();   

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if(res.data.deleteCount > 0) {
                    refetch()
              Swal.fire({
                title: "Deleted!",
                text: `${item.name} file has been deleted.`,
                icon: "success"
              });
            }
            }
          });
    }
    return (
        <div>
            <SectionTitle heading='Manage All Items' subHeading='Hurry up'></SectionTitle>      
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item, index) =>   <tr key={item._id}>
            <td>
                {index + 1}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>  
                {item.name}
            </td>
            <td>$ {item.price}</td>
            <td>
              <Link to={`/dashboard/updateItem/${item._id}`}>
               <button>
                update
                </button>
              </Link>
            </td>
            <td>
            <button onClick={() => handleDeleteItem(item)} 
                         className="btn btn-ghost btn-md rounded-[100%] p-3">
                              <MdDelete className="text-[22px] text-red-600"/>
                        </button>
            </td>
          </tr>)
      }

    </tbody>
    </table>
    </div>  
      </div>
    );
};

export default ManageItem;