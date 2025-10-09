import { API } from "./constants";
// async function to get guest from api//
export async function getGuests(){
    try{
    const response = await fetch(API);
    const result = await response.json();

    if (result.success){
        return result.data;
    }
    return[];
    }catch(error){
        console.error(error);
        return [];
    }

}
// function to get guest from api via ID//
export async function getGuestById(id){
    
    try{
        const response = await fetch(`${API}/${id}`);
        const result = await response.json();

        if (result.success){
            return result.data;
        } return [];
    }catch(error){
        console.error(error);
    return[];
}
}