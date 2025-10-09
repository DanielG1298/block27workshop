import {useState, useEffect} from "react";
import {getGuests} from "../api.js"
export function GuestLists({setGuestId}){
const [guestList, setGuestList]= useState([]);

    useEffect(()=>{
        const fetchGuestList = async()=>{
            const data = await getGuests();
            setGuestList(data);
        };
            fetchGuestList();
    },[]
);

return(
    <section className="guest-list">
        <h1>Guest List</h1>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {guestList.map((guest) =>(
                    <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
                        <td>{guest.name}</td>
                        <td>{guest.email}</td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    </section>
);
}