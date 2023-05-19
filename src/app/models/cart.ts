import { Product } from "./product";
import { User } from "./user";

export interface Cart {
    id          ?: number;
    productList    ?: Product[];
    cartOwner   ?: User;
}