import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

constructor(private readonly courseService: CoursesService) {}

  @Get('list')
  findAll() {
    return 'listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso com ID ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Update course with ID ${id}`;
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Delete course with ID ${id}`;
  }
}
