import { useParams } from "react-router";
import Navbar from "../components/Navbar";

function AdventureChumbiesProfile(){
    const params = useParams();
    return (
        <div>
           <h1>Adventure Chumbie Profile {params.adventureChumbiesId}</h1>
           <Navbar/> 
        </div>
    );
}

export default AdventureChumbiesProfile