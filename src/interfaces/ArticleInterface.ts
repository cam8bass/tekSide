export interface ArticlesInterface {
  id: number;
  title: string;
  img: string;
  price: number;
  description: {
    processor: string;
    ram: string;
    graphicCard: string;
    harkDisk: string;
    system: string;
    wifi: boolean;
  };
}
