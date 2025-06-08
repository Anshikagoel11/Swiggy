import RestHeader from "./RestHeader";
import { Outlet } from "react-router";


export default function SecondHome(){
    return(
        <>
        <RestHeader/>
          <Outlet/>
        </>
    )
}