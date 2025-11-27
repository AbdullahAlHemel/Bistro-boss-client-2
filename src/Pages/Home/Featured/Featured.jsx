import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <section className="py-8 featuredItem text-white bg-fixed bg-cover bg-center">
      <SectionTitle heading="Featured Item" subHeading="Check It Out" />
      
      <div className="md:flex md:justify-center md:items-center gap-10 py-6 px-4 md:px-10">
        {/* Image Section */}
        <div className="md:flex-1">
          <img 
            className="w-full md:w-[900px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
            src={featuredImg} 
            alt="Featured Item" 
          />
        </div>

        {/* Text Section */}
        <div className="md:flex-1 mt-6 md:mt-0 text-center md:text-left space-y-3 text-[18px]">
          <p className="text-orange-400 font-semibold">Aug 20, 2029</p>
          <h3 className="uppercase text-2xl md:text-3xl font-bold">Where can I get some?</h3>
          <p className="text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio impedit unde adipisci commodi odit neque excepturi sed sunt ipsam!
          </p>
          <button className="btn-featured mt-2">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
