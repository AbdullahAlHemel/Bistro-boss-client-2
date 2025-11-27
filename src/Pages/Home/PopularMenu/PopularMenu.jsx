import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import UseMenu from '../../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <section className="my-20">
            {/* Section Header */}
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            />

            {/* Popular Items Grid */}
            <div className="grid md:grid-cols-2 gap-8 my-10 px-4 md:px-0">
                {popularItems.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>

            {/* View Full Menu Button */}
            <div className="text-center mt-10">
                <Link to="/menu">
                    <button className="btn btn-outline border-0 border-b-2 px-10 py-2 text-lg font-semibold hover:text-orange-500 transition-all">
                        View Full Menu
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;
