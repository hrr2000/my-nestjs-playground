import { Global, Module } from "@nestjs/common";
import { MemoryDatabase } from "./database-services/memory-database.service";
import { DatabaseService } from "./database.service";

@Global()
@Module({
    providers: [
        {
            provide: DatabaseService,
            useClass: MemoryDatabase
        }
    ],
    exports: [],
})
export class DatabaseModule {}