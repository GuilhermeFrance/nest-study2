import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {

    private courses : Course[] = [
        {
            id: 1,
            name: "Curso de JavaScript",
            description: "Curso sobre a linguagem JavaScript",
            tags: ['javascript', 'frontend']
        },
    ]

    
    findAll(){
        return this.courses
    }

    findOne(id: number){
        this.courses.find(courses => courses.id === id)
    }

    create(createCourseDTO: any){
        this.courses.push(createCourseDTO)
    }

    update(id: number, updateCourseDTO: any){
        const existingCourse = this.findOne(id)
        if(existingCourse){
            const index = this.courses.findIndex(course => course.id === id)
            this.courses[index] = {
                id,
                ...updateCourseDTO
            }
        }

    }
    

}
