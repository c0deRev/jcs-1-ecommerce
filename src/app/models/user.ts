import { Cart } from "./cart";

export interface User {
    id          ?: number;
    username    ?: string;
    password    ?: string;
    email       ?: string;
    cart        ?: Cart
}