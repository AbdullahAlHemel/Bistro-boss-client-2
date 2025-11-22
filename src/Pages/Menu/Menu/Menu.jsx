import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

import menuImageDessert  from '../../../assets/menu/dessert-bg.jpeg'
import menuImageOffer  from '../../../assets/menu/banner3.jpg'
import menuImageSoup  from '../../../assets/menu/soup-bg.jpg'
import menuImageSalad  from '../../../assets/menu/salad-bg.jpg'

const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    
    return (
        <>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>


            <MenuCategory items={offered}      
             title='Our menu'  img={menuImageOffer} img1={menuImageOffer}
             heading="Don't Miss" subHeading="Today's offer"
            ></MenuCategory>

            <MenuCategory items={dessert.slice(0,6)}
             title='dessert'  img={menuImageDessert} img1={menuImageDessert}
             heading="Don't Miss" subHeading="Dessert offer"
            ></MenuCategory>

            <MenuCategory items={soup.slice(0,6)}
             title='soup'  img={menuImageSoup} img1={menuImageSoup}
             heading="Don't Miss" subHeading="Soup offer"
            ></MenuCategory>

            <MenuCategory items={salad.slice(0,8)}
             title='salad'  img={menuImageSalad} img1={menuImageSalad}
             heading="Don't Miss"subHeading="Salad offer"
            ></MenuCategory>

        </>
    );
};

export default Menu;