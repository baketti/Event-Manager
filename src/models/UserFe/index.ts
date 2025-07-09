export interface UserFe {
    id: number;
    email: string;
    joinedEvents: number[];
    name: string;
    password: string; 
    role: UserRoles;
}

export enum UserRoles {
    ADMIN = "admin",
    USER = "user",
}