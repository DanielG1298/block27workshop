import { useState } from "react";
import GuestDetails from "./guests/guestDetails.jsx";
import { GuestLists } from "./guests/guestLists.jsx";

export default function App() {
  const [GuestId, setGuestId] = useState();
  return <>
    <main>
      {GuestId ? (
        <GuestDetails GuestId={GuestId} setGuestId={setGuestId}/>
      ) : (
        <GuestLists setGuestId={setGuestId} guestId={GuestId}/>
      
      )}
    </main>
    
  </>;
}
