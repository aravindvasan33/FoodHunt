import React from "react";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartslice";

const Itemlist = ({ items }) => {
  const dispatch=useDispatch();
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="text-left flex m-5 p-5 border-black">
          <div className="w-9/12 border-b-2 border-black ">
            <div>{item.card.info.name}</div>
            <div>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="rounded-lg w-3/12 h-32 ">
            <div className="absolute bg-black text-white rounded-lg justify-center shadow-lg">
            <button onClick={()=>{
              dispatch(addItem(item))
            }}>ADD+</button>
            </div>
            <img className="rounded-lg overflow-hidden max-h-full object-cover w-full"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
