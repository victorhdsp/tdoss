import { OAuth } from "./getAuth.t";

function setCookieAuthorization(access_token:string, expires_in:number) {
    const d = new Date();
    d.setTime(d.getTime() + (expires_in*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "Authorization=" + access_token + ";" + expires + ";path=/";
  }

const getCookiesAuthorization = () => {
    let name = "Authorization=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const getRequestOptions = () => {
    const requestOptions = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${getCookiesAuthorization()}`
        }
    };
    
    return requestOptions
}

export const getToken = async () => {
    
    const formdata = new FormData();
    formdata.append("grant_type", "client_credentials");
    formdata.append("client_id", "u-s4t2ud-6704663229a503c909036dcead7f9a5523df829d826a1b96320cca6b767dc80f");
    formdata.append("client_secret", "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");

    const requestOptions = {
        method: "POST",
        body: formdata
    };

    const response = await fetch("https://api.intra.42.fr/oauth/token", requestOptions)

    const result = await response.json() as OAuth

    if (result.access_token && result.expires_in){
        setCookieAuthorization(result.access_token, result.expires_in)
    }
}