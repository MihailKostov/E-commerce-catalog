import { Product } from './Product';

export type MyState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cart: any,
  itemsInCart: Product[],
};
