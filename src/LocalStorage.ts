const REGISTERED_USERS = "Registered_Users";
const ACTIVE_USER = "active_user";

export interface userData {
    username: string;
    password: string;
    email?: string;
    avatarUrl?: string
}

const addNewUser = (user: userData) => {
    const userString = localStorage.getItem(REGISTERED_USERS) || "[]";
    const users = JSON.parse(userString) as userData[]; 
    users.push(user); 
    localStorage.setItem(REGISTERED_USERS, JSON.stringify(users));
}

const isUserRegistered = (username: string): boolean => {
    const userString = localStorage.getItem(REGISTERED_USERS);

    if (!userString) {
        return false;
    }

    const users: userData[] = JSON.parse(userString);

    if (!Array.isArray(users)) {
        console.error("Error: el valor de localStorage no es un arreglo válido");
        return false;
    }
    const foundUser = users.find((user) => user.username === username);
    return foundUser != null;
}

const updateActiveUser = (user: userData) =>{
    localStorage.setItem(ACTIVE_USER, JSON.stringify(user))
}

const getActiveUser = () =>{
    const activeUser = localStorage.getItem(ACTIVE_USER) || null;
    if(activeUser == null)
        return null;
return JSON.parse(activeUser);
}

const deleteActiveUser = () =>{
    localStorage.removeItem(ACTIVE_USER)
}

export { addNewUser, isUserRegistered, getActiveUser , updateActiveUser , deleteActiveUser };
