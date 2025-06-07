import { Link } from "react-router";

export default function SearchItem(){
    return(
<Link to={"/restaurants/:id/search"}>
<h1>Hey i am search</h1>
</Link>
    )
}