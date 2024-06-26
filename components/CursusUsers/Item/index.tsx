"use client"

import { cursus_users } from "../cursusUser.t";

interface cursusUserProps {
    item: cursus_users
}

export default function Item({item}: cursusUserProps) {
    const { user, cursus, level } = item;
    
    return (
        <a 
            href={"https://profile.intra.42.fr/users/"+user.login} 
            className="flex gap-10" target="_blank"
        >
            <div className="overflow-hidden w-56 h-56">
                <img
                    src={user.image.versions.medium || user.image.link} 
                    alt={user.displayname} 
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div>
                <p className="text-lg" >{cursus.name}</p>
                <h2 className="text-2xl" >{user.displayname}</h2>
                <p className="text-lg" >{user.login}</p>
                <p className="text-lg" >{level}</p>
            </div>
        </a>
    );
}
