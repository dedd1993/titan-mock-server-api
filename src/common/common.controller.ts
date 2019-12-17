import { Controller, Get } from '@nestjs/common';

@Controller('commons')
export class CommonController {

  @Get('/cashopening/status')
  getTasks(): any {
    return { code: 100 };
  }
}
