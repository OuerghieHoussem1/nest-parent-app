import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller()
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getHello(): string {
    return this.dogsService.getHello();
  }
}
