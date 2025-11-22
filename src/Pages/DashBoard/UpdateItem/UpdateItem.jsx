import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiousPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateItem = () => {

    const {name, category, recipe, price, image} = useLoaderData()
    const {register, handleSubmit, reset} = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = UseAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile =  { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            //now send the menu item data to the server with the image
            const menuItem = {
               name : data.name,
               category: data.category,
               price: parseFloat(data.price),
               recipe:data.recipe,
               image : res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                // show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been saved`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        } 
        console.log('With image url', res.data);
    }
    // console.log(name, category, recipe, price, image);
    return (
        <div>
          <SectionTitle heading='Update an Item' subHeading='Refresh Info'></SectionTitle>            
          <div className="form-control w-full">
                <form onSubmit={handleSubmit(onSubmit)}>

                <div>            
                    <label className="label"> <span className="label-text">Recipe Name*</span> </label> <input defaultValue={name} type="text" placeholder="Recipe Name" {...register("name", {required:true})} required className="input input-bordered w-full mb-4" /></div>

                <div className='flex gap-10'>
                  <div>
                    <label className="label">
                    <span className="label-text">Category</span>
                    </label>
                    <select defaultValue={category} {...register("category", {required:true})} required className="select select-bordered w-[320px] ">
                        <option disabled value='default'>Select a Category</option>
                        <option value='salad'>Salad</option>
                        <option value='pizza'>Pizza</option>
                        <option value='soup'>Soup</option>
                        <option value='dessert'>Dessert</option>
                        <option value='drinks'>Drinks</option>
                    </select>
                  </div>
                
                  <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                        </label>
                        <input type="number" defaultValue={price} placeholder="price" {...register("price", {required:true})} required className="input input-bordered w-[320px] mb-4" />
                  </div>
                   </div>
                   <label className="label">
                        <span className="label-text">Recipe Details</span>
                        </label>
                   <textarea defaultValue={recipe} {...register("recipe", {required:true})} required className="textarea textarea-bordered w-full h-36" placeholder="recipe"></textarea>
                   <input defaultValue={image} type="file" className="file-input file-input-bordered  file-input-md w-full" {...register("image", {required:true})} required/>
                    
                    <input className='btn w-full my-3 hover:bg-red-50' type='submit'/>
                </form>
           </div>
        </div>
    );
};

export default UpdateItem;