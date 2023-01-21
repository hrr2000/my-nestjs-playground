import {Injectable} from '@nestjs/common'
import { Entity } from './interfaces';

@Injectable()
export class DatabaseService{

    findOne(entity: string, where?: Partial<Entity>): Entity | null {
        return null
    }
    findAll(entity: string, where?: Partial<Entity>): Entity[] {
        console.log('test')
        return []
    }
    insertOne(entity: string, data: Partial<Entity>): boolean {
        return false
    }
    insertMany(entity: string, data: Partial<Entity>[]): boolean {
        return false;
    }

}
