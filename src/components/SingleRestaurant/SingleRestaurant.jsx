import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestaurantShimmer from "./RestaurantShimmer";
import RestaurantData from "./RestaurantData";
import { useDispatch, useSelector } from "react-redux";
import {fetchRestData} from "../../Redux/SingleRestSlicer"

export default function SingleRestaurant() {
    const {id} = useParams();
   const {data , loading,error}= useSelector((state)=>state.SingleRestaurant)
const dispatch = useDispatch();


  useEffect(() => {
      dispatch(fetchRestData(id));
    }, [dispatch]);


    if (loading) return <RestaurantShimmer/>
    if (error) return <div className="flex justify-center align-middle p-10">Some Error occurred: {error}</div>


    return (
        <RestaurantData id={id}/>
    );
}