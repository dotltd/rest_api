import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ProductsInterface, AuthInterface } from './products.interface';
import { ProductsSchema, ProductModel } from './modules/database.module';
import { ProductsService } from './products.service';
import { Request } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}
  @Get()
  mainPage() {
    return this.service.mainPage();
  }
  @Get('fetch')
  fetch() {
    return this.service.fetch();
  }
  @Post('post')
  post(@Body() body) {
    return this.service.post(body);
  }
  @Delete('delete')
  delete(@Body() body: ProductsInterface, @Req() req: Request) {
    return this.service.del(body.id, req.headers['authorization']);
  }
  @Delete('purge')
  purge(@Req() req: Request) {
    return this.service.purge(req.headers['authorization']);
  }
  @Post('addAuth')
  test(@Body() body: AuthInterface) {
    return this.service.addAuth(body.token)
  }
}
