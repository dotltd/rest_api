import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { DiscordController } from './discord/discord.controller';
import { DiscordService } from './discord/discord.service';

@Module({
    imports: [],
    controllers: [AppController, ProductsController, DiscordController],
    providers: [AppService, ProductsService, DiscordService],
})
export class AppModule {}
