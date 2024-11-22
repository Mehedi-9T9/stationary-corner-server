export type IProduct = {
    name: "Pen" | "Notebook" | "Eraser";
    brand: "Pilot"| "Moleskine"| "Faber-Castell";
    price : number;
    category :"Writing"| "Office Supplies"| "Art Supplies" | "Educational"| "Technology";
    description:string;
    quantity:number;
    inStock:boolean
  }