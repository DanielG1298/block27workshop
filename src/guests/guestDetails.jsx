import {useState, useEffect} from "react";
import {getGuestById} from "../api.js";

export default function GuestDetails({GuestId, setGuestId}){
    const [guest, setGuest]= useState(null);

    useEffect(()=>{
        const fetchGuestDetails = async()=>{
            const data = await getGuestById(GuestId);
            console.log(data);
            setGuest(data);
            
        };
         fetchGuestDetails();
    },[GuestId]
);  
if (!guest){
    return <div>loading</div>
}
    return(
        <article className="guest-details">
            <h2>{guest.name}</h2>
            <p>{guest.id}</p>
            <p>{guest.email}</p>
            <p>{guest.phone}</p>
            <p>{guest.bio}</p>
            <p>{guest.job}</p>
            <button onClick={()=> setGuestId(null)}>back</button>
        </article>
    )

}