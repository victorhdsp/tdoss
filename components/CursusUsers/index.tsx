"use client"

import { useEffect, useState } from "react";
import { cursus_users } from "./cursusUser.t";
import Item from "./Item";
import { getRequestOptions, getToken } from "@/assets/getAuth";
import { OAuthError } from "@/assets/getAuth/getAuth.t";

export default function cursusUsers() {
    const [cursusUser, setCursusUser] = useState<cursus_users[]>([])

    useEffect(() => {
        (async () => {
            if (cursusUser.length === 0) {
                const response = await fetch("https://api.intra.42.fr/v2/cursus/9/cursus_users?filter[campus_id]=28&sort=level&range[created_at]=2024-01-01T13:41:00.825Z,2024-12-01T13:41:00.825Z&filter[active]=true", getRequestOptions())
    
                if (response.status === 401) {
                    await getToken()
                } else if (response.ok) {
                    const result = await response.json() as cursus_users[]
                    setCursusUser(result);
                }
            }
        })()
    }, [])

    return (
        <div className="flex flex-col gap-8">
            { cursusUser && cursusUser?.map((cursusUser) => (
                <Item item={cursusUser} key={cursusUser.user.id}/>
            ))}
        </div>
    );
}
