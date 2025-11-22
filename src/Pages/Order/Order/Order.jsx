import React, { useState } from 'react';
import OrderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/SectionTitle/FoodCard/FoodCard';
import OrderTab from '../OrderTab.jsx/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => { 

    <Helmet>
                <title>Bistro | Order Food</title>
    </Helmet>

    const categories = ['salad', 'pizza', 'dessert', 'soup', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu()
    console.log(category);

    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover img={OrderCover} img1={OrderCover} title='Order Food'></Cover>

            <Tabs className='mx-auto  my-4' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-xl font-bold'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel> 
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                
                <TabPanel>
               <OrderTab items={dessert}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>   
           </Tabs>
        </div>
    );
};

export default Order;