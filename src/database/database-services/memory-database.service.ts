import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database.service";
import { Entity, MemoryStorage, User } from "../interfaces";

@Injectable()
export class MemoryDatabase extends DatabaseService {
    storage: MemoryStorage = {
        users: [{
            name: 'hello',
            age: 15,
            id: 100
        }]
    };

    findOne(entityName: keyof MemoryStorage, where?: Partial<Entity>): Entity | null {
        return this.findAll(entityName, where)?.[0] || null
    }

    findAll(entityName: keyof MemoryStorage, where?: Partial<Entity>): Entity[] {
        console.log('test')
        if(!where) 
            return this.storage[entityName];

        return this.storage[entityName].filter((item: Entity) => {
            for(const key in where) 
                if(item[key] != where[key]) 
                    return false;
            return true;
        })
    }

    insertOne(entityName: keyof MemoryStorage, data: Entity): boolean {
        this.storage[entityName].push(data);
        return true;
    }

    insertMany(entityName: keyof MemoryStorage, dataList: Entity[]): boolean {
        this.storage[entityName].push(...dataList);
        return true;
    }
}

const user: User = (new MemoryDatabase).findOne('users');