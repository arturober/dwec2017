import { IProduct } from './product';
import { IComment } from './comment';
import { IUser } from './user';

export interface OkResponse {
  ok: boolean,
  error?: string
}

export interface ResponseProducts extends OkResponse {
  products: IProduct[];
}

export interface ResponseProduct extends OkResponse {
  product: IProduct;
}

export interface ResponseComments extends OkResponse {
  comments: IComment[];
}

export interface ResponseUser extends OkResponse {
  user: IUser;
}
