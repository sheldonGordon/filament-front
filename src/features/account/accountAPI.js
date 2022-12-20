import {URL_API_FILAMENT} from "../../app/const";
export function fetchGetAllAccount(){
    return fetch(`${URL_API_FILAMENT}/accounts`).then((res) => res.json())
}

export function fetchGetAccountById(id){
    return fetch(`${URL_API_FILAMENT}/accounts/${id}`).then((res) => res.json())
}

export function fetchGetAccountByAlias(alias){
    return fetch(`${URL_API_FILAMENT}/accounts/alias/${alias}`).then((res) => res.json())
}

export function fetchSaveAccount(account){
    const headersInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: account.id,
            aliasName: account.aliasName,
            firstName: account.firstName,
            lastName: account.lastName,
            listPrinter: account.listPrinter
        })
    };
    return fetch(`${URL_API_FILAMENT}/account`, headersInit).then((res) => res.json())
}

export function fetchUpdateAccount(account){
    const headersInit = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: account.id,
            aliasName: account.aliasName,
            firstName: account.firstName,
            lastName: account.lastName,
            listPrinter: account.listPrinter
        })
    };
    return fetch(`${URL_API_FILAMENT}/account`, headersInit).then((res) => res.json())
}

export function fetchDeleteAccount(id){
    return fetch(`${URL_API_FILAMENT}/accounts/${id}`, { method: 'DELETE' }).then((res) => res.json());
}