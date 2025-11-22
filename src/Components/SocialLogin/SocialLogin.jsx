import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import useAxiosPublic from '../../Hooks/useAxiousPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = UseAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>  {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div className='m-auto flex mb-6'>
            <button onClick={handleGoogleSignIn} className='btn bg-green-500 px-24 border-rose-900 border'>
                <FaGoogle className=' text-[30px] '></FaGoogle>
                <h2 className='text-[22px] font-semibold '>Google</h2>
            </button>
        </div>
    );
};

export default SocialLogin;