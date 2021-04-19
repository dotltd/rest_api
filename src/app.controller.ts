import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // @Redirect(`http://localhost/products`, 301)
  // redirection() {}
  @Get()
  main(): object {
    return this.appService.main_page();
  }
}
