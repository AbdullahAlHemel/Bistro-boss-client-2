import React from "react";
import { Helmet } from "react-helmet-async";
import UseMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

import menuImageDessert from "../../../assets/menu/dessert-bg.jpeg";
import menuImageOffer from "../../../assets/menu/banner3.jpg";
import menuImageSoup from "../../../assets/menu/soup-bg.jpg";
import menuImageSalad from "../../../assets/menu/salad-bg.jpg";

const categories = [
  { key: "offered", title: "Today's Offer", img: menuImageOffer, limit: 6 },
  { key: "dessert", title: "Dessert Special", img: menuImageDessert, limit: 6 },
  { key: "soup", title: "Soup Delight", img: menuImageSoup, limit: 6 },
  { key: "salad", title: "Fresh Salads", img: menuImageSalad, limit: 8 },
];

const Menu = () => {
  const [menu] = UseMenu();

  return (
    <>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      {categories.map((category) => {
        const items = menu.filter((item) => item.category === category.key).slice(0, category.limit);
        return (
          <MenuCategory
            key={category.key}
            items={items}
            title={category.key}
            img={category.img}
            img1={category.img}
            heading="Don't Miss"
            subHeading={category.title}
          />
        );
      })}
    </>
  );
};

export default Menu;
