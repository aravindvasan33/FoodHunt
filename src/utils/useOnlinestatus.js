import React, { useEffect, useState } from 'react'

const useOnlinestatus = () => {
  const[onlinestatus,setonlinestatus]=useState("offline");
  

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlinestatus(false);
    });
    
    window.addEventListener("online", () => {
      setonlinestatus(true);
    });},[]);
    return onlinestatus;
}

export default useOnlinestatus