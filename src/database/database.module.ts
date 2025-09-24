import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entities/courses.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions:DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'docker',
    database: 'nestraining',
    entities: [Course],
    synchronize: true,
}


@Module({
      imports: [TypeOrmModule.forRootAsync({
        useFactory: async () => {
            return {
                ...dataSourceOptions
            }
        }
    })],

})
export class DatabaseModule {

  
}
