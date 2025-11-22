import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useActionData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import useAxiosPublic from '../../Hooks/useAxiousPublic';

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset , formState: { errors },} = useForm()
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.PhotoURL)
            .then(() => {
                // create User
                const userInfo = {
                    name : data.name,
                    email: data.email,
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId){

                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    }
                })              
            })

            .catch(error => console.log(error))
           
        })
    }  

    return (<>
        <Helmet>
                    <title>Bistro || SignUp</title>
        </Helmet>
        <div>
         <div className="hero min-h-screen ">
            <div className="hero-content md:flex">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">SignUp now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name",{required: true})} name="name"placeholder="Your Name" className="input input-bordered"  />
                    {errors.name && <span className='text-red-600 ml-3 mt-1'>This field is required</span>}
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" {...register("PhotoURL",{required: true})} placeholder="Your Name" className="input input-bordered"  />
                    {errors.PhotoURL && <span className='text-red-600 ml-3 mt-1'>PhotoURL is required</span>}
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email",{required: true})} name="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className='text-red-600 ml-3 mt-1'>This field is required</span>}
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type="password" {...register("password",
                     {required: true, 
                     minLength: 6, 
                     maxLength: 20,
                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                     })} name="password" placeholder="password" className="input input-bordered" />
                    {errors.password ?.type === 'required' && <span className='text-red-600 ml-3 mt-1'>Password is required</span>} 
                    {errors.password ?.type === 'minLength' && <span className='text-red-600 ml-3 mt-1'>Password much be 6 Characters</span>}
                    {errors.password ?.type === 'maxLength' && <span className='text-red-600 ml-3 mt-1'>Password much be less then 20 Characters</span>}   
                    {errors.password ?.type === 'pattern' && <span className='text-red-500 text-[12px] mx-2 mt-1'>Password Must be have one uppercase, one lowercase, one Number, One Special Characters</span>}   
                  
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>

                    
                    <div className="form-control mt-6">
                    <input type="submit" value='SignUp' className='btn btn-primary' />
                    </div>
                </form>
                <p className='text-center my-2'><small>Already Have a account? <Link to='/login' className='text-blue-600 text-[16px]'>Login Now</Link> </small></p>
                </div>
            </div>
            </div>
        </div></>
    );
};

export default SignUp;