import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1758816921255 } from 'src/migrations/1758816921255-CreateCoursesTable';
import { CreateTagsTable1758819892867 } from 'src/migrations/1758819892867-CreateTagsTable';
import { CreateCoursesTagsTable1758821406350 } from 'src/migrations/1758821406350-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1758822368493 } from 'src/migrations/1758822368493-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1758823226815 } from 'src/migrations/1758823226815-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1758816921255,
    CreateTagsTable1758819892867,
    CreateCoursesTagsTable1758821406350,
    AddCoursesIdToCoursesTagsTable1758822368493,
    AddTagsIdToCoursesTagsTable1758823226815

]});
