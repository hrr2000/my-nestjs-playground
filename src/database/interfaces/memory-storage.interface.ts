import { User } from "./user.interface";

export interface MemoryStorage {
    users: User[]
}

export type Entity = User