import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  main_page(): object {
      return {"error": true, "message": "Invalid Request"};
  }
}

