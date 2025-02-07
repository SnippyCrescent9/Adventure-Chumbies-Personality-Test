import { useParams } from "react-router";
import Navbar from "../components/Navbar";
export default function AdventureChumbiesProfile(){
    const params = useParams();
    return (
        <div>
           <h1>Adventure Chumbie Profile {params.adventureChumbiesId}</h1>
           <Navbar/> 
        </div>
    );
}