import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { ProductModel } from './modules/database.module';
import { ProductsInterface } from './products.interface';
import { addAuth, checkAuth } from '../modules/auth.module';

@Injectable()
export class ProductsService {
    // Delete one element
    async del(id: number, auth: string): Promise<any> {
        if (!(await checkAuth(auth)))
            throw new ForbiddenException({
                message: 'You have no access to this method.',
            });
        try {
            await ProductModel.deleteOne({ id: id });
        } catch (err) {
            throw new InternalServerErrorException(err.stack);
        }
        return { message: `Deleted object with id: ${id}` };
    }
    // Post new item into a database
    async post(body: ProductsInterface): Promise<any> {
        const checker = await ProductModel.findOne({ id: body.id }).exec();
        if (checker)
            throw new BadRequestException({ message: 'Object already exists' });
        const data = {
            id: body.id,
            quantity: body.quantity,
            name: body.name,
            price: body.price,
        };
        const mongoData = new ProductModel(data);
        await mongoData.save();
        return data;
    }
    // Fetch all items
    async fetch(): Promise<any> {
        return ProductModel.find(
            {},
            { _id: false, id: false, __v: false },
        );
    }
    // Useless main page
    async mainPage(): Promise<any> {
        throw new NotFoundException({
            error: 'Invalid request. Page does not exists',
        });
    }
    async purge(auth): Promise<any> {
        if (!(await checkAuth(auth)))
            throw new ForbiddenException({
                message: 'You have no access to this method.',
            });
        try {
            await ProductModel.deleteMany({ name: /.*/ });
        } catch (err) {
            throw new InternalServerErrorException({
                message: 'You have no access to this method.',
            });
        }
        return { message: `Purged the entire database.` };
    }
    async addAuth(param: string): Promise<any> {
        return addAuth(param);
    }
}
