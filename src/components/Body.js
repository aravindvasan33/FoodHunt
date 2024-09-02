
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import SearchIcon from '@mui/icons-material/Search';

import Restaurantcard from "./Restaurantcard";
import { Link } from "react-router-dom";

    
   

  
const Body = () => {
  // // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setsearchtext] = useState("");

 

 

  // // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0569467&lng=80.242469&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
 


  return listOfRestaurants.length===0 ?(<Shimmer/>):(
    <><div className="flex">
      <div className="m-4 p-2  "><input className="border w-80 bg-gray-700 border-solid border-black border-2 rounded" id="" placeholder=" 
         Search For The Restaurants"
        value={searchtext} onChange={(e) => {
          setsearchtext(e.target.value);
        } } />
        <button className="font-bold p-2 m-4  bg-yellow-500 rounded hover:bg-black hover:text-yellow-500 " onClick={() => {
          const filteredrestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

          setFilteredRestaurant(filteredrestaurant);
        } }

        ><SearchIcon/>Search
        </button>
      </div>

      <div className="filter">
        <button className="font-bold m-10 w-40 h-10 bg-yellow-500  hover:bg-black hover:text-yellow-500 rounded"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.0);
            console.log(filteredList);
            setFilteredRestaurant(filteredList);

          } }>Top Rated</button>
      </div>
    </div><div className="flex flex-wrap">
        {filteredrestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            <Restaurantcard resdata={restaurant} />
          </Link>)
        )}
      </div></>
    
  );
};
export default Body;