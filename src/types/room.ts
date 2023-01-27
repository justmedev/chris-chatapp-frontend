import { User } from "@/types/generic";

export interface Room {
    active: boolean;
    name: string;
    members: number;
    online: User[];
}
