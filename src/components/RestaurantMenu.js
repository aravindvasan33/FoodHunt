import React from 'react';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import  RestaurantCategory  from './RestaurantCategory';

const RestaurantMenu = () => {


  const[resinfo,setresinfo]=useState();
  const{resId}=useParams();
  console.log(resId);
  const fetchmenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0569467&lng=80.242469&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
  const json= await data.json();

  
  setresinfo(json.data);
  };
  useEffect(()=>{
    fetchmenu();
  })


  if (!resinfo) {
    return  <Shimmer/>
  }
 
  
const{name,costForTwoMessage
,cuisines}= resinfo?.cards[2]?.card?.card?.info;



const categories=resinfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
  (c) =>
    c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


console.log(categories);

console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  return (
    <div className='text-yellow-500 bg-indigo-950 text-center'>
        <h1 className='font-bold'>{name}</h1>
        <h2>{cuisines.join(", ")}-{costForTwoMessage}</h2>

        {categories.map((category)=>(
          <RestaurantCategory data={category?.card?.card}/>
        )
        )}
        
        
    </div>
  );
};

export default RestaurantMenu;