import { All, Controller, Get, Query, Req, Res } from "@nestjs/common";
import { DiscordService } from "./discord.service";
import { Request } from 'express';

@Controller('v1/discord')
export class DiscordController {
    constructor(private readonly service: DiscordService) {}
    @Get()
    main(@Query('num') num: number) {
        return this.service.main(num)
    }
}
