import { AuthModel } from "../products/modules/database.module";

export async function checkAuth(param: string): Promise<boolean> {
  var checker = await AuthModel.findOne({ token: param }).exec();
  return !!checker;
}
export async function addAuth(param: string): Promise<any> {
  if (await checkAuth(param))
    return { message: 'This token already exists in DataBase.' };
  else {
    let o = new AuthModel({
      token: param,
    });
    await o.save();
    return { message: 'Successfully added new token' };
  }
}
