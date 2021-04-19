import { Controller, Get, Query } from "@nestjs/common";
import { DiscordService } from "./discord.service";

@Controller('v1/discord')
export class DiscordController {
  constructor(private readonly service: DiscordService) {}
  @Get()
  main(@Query('num') num: number) {
    return this.service.main(num);
  }
}
