export type HomePageCardType = {
    title: string;
    image: string;
    link: string;
}

export type SearchCategory = {
    title: string;
    value: string;
    imgUrl: string;
}

export type Product = {
    id : number,
    title: string,
    image: string,
    image_small: string,
    attribute: string, 
    description : string,
    brand: string, 
    avgRating: number,
    ratings: number,
    price: number,
    oldPrice: number,
    badge: string,
    quantity: number
}


export type CartProduct = Product & {
    quantity: number
}

export type Suggestion = {
    id: number;
    title: string;
}