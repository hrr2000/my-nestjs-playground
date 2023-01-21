import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Entity } from 'src/database/interfaces';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): Entity[] {
    return this.databaseService.findAll('users');
  }
}
