export interface OAuth {
    "access_token": string,
    "token_type": string,
    "expires_in": number,
    "scope": string,
    "created_at": number,
    "secret_valid_until": number
}

export interface OAuthError{
    status: 401, 
    error: 'The access token is invalid'
}