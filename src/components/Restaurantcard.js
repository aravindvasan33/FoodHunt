
import CONS_URL from "../utils/constants";
import StarsIcon from '@mui/icons-material/Stars';
const Restaurantcard=(props)=>
{ const { resdata}=props;
  const {name,cloudinaryImageId,costForTwo,avgRating,cuisines,areaName}=resdata?.info;
  const {slaString}=resdata?.info.sla;
  
  
  
  return (
    <div className="m-4 p-4 w-[250px] min-h-96 h-auto  rounded-lg bg-yellow-500  hover:bg-black hover:text-yellow-500 overflow-hidden inline-block">
      <h3 className="font-bold">{name}</h3>
      
      <img className=" rounded-lg object-scale-down" src={CONS_URL+cloudinaryImageId} alt="foodimage"></img>
      
      <h4 className="font-semibold">{costForTwo}</h4>
      <h4 className="flex flex-row text-green-600 font-semibold"><StarsIcon/> { avgRating}</h4> <h4 className="font-semibold">{slaString}</h4>
      <h5 className="">{cuisines.join(', ')} </h5>
      <h5>{areaName}</h5>
      
     


    </div>
  )
};
export default Restaurantcard;