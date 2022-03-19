import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    main_page(): any {
        return { error: true, message: 'Invalid Request' };
    }
}
