
import { CoursesService } from './courses.service';

describe('CourseService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    
    service = new CoursesService()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
