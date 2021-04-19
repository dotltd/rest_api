import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class DiscordService {
  main(deleted_data: number): object {
    if (!deleted_data)
      throw new BadRequestException({ error: 'No argument given' });
    if (deleted_data > 99) {
      throw new BadRequestException({
        error: 'More than 99 messages can not be deleted',
      });
    } else {
      return { status: 200, message: 'Successfully deleted messages' };
    }
  }
}
