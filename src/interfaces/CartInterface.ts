import type { ArticlesInterface } from "./ArticleInterface";

export interface CartInterface extends ArticlesInterface {
  quantity: number;
  pricePerItem: number;
}
