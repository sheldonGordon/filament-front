import {URL_API_FILAMENT} from "../../app/const";

export function fetchGetAccountById(id){
    return fetch(`${URL_API_FILAMENT}/accounts/${id}`).then((res) => res.json())
}