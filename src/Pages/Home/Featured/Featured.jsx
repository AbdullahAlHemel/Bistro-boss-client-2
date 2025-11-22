import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='py-4 featuredItem pb-16 text-white bg-fixed'>
            <SectionTitle heading={'Featured Item'} subHeading={'Check It Out'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-2 px-10'>
                <div>
                    <img className='w-[900px] rounded' src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 text-[18px]'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase text-[25px]'>Where can i get some? </p>
                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio impedit unde adipisci commodi odit neque excepturi sed sunt ipsam!</p>
                    <button className='btn btn-outline border-0 border-b-2 border-orange-500 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;