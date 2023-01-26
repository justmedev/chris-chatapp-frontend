export interface User {
    name: string;
    uuid: string;
}

export interface Room {
    active: boolean;
    name: string;
    members: number;
    id: number;
    online: User[];
}
