import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,subHeading, heading, title ,img, img1}) => {
    return (
        <div>
       <Cover title={title} img={img} img1={img1}></Cover>
       <SectionTitle subHeading={subHeading} heading={heading}></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10 my-8'>
                { 
                    items.map(item => <MenuItem
                     key={item._id}
                     item={item}></MenuItem>)
                }
            </div>
         <div className='mx-auto w-[120px]'><Link to={`/order/${title}`} className='w-[130px] m-auto mb-7'><button className='btn uppercase btn-outline border-0 border-b-2 mt-4 px-10 mb-3'>Order</button></Link></div>
        </div>
    );
};

export default MenuCategory;