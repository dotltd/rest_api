import { Body, Controller, Delete, Get, Post, Req } from "@nestjs/common";
import { AuthInterface, ProductsInterface } from "./products.interface";
import { ProductsService } from "./products.service";
import { Request } from "express";

@Controller('data/products')
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
    return this.service.addAuth(body.token);
  }
}
