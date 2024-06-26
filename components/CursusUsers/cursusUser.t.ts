export interface cursus_users {
    "level": number,
    "id": number,
    "user": {
        "id": number,
        "email": string,
        "login": string,
        "url": string,
        "phone": string,
        "displayname": string,
        "image": {
            "link": string,
            "versions": {
                "medium": string,
            }
        },
        "correction_point": number,
    },
    "cursus": {
        "id": number,
        "created_at": string,
        "name": string,
    }
}