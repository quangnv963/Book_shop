export interface IProduct {
    _id:number;
    name:string;
    img: string;
    price:number;
    desc:string;
    categoryID?:string
}

export interface ICate {
    _id:number;
    name:string;
    slug: string;
}

export interface IUsers {
    email:string;
    name:string;
    password:string;
    _id:number;
    role:"admin" |"member" | "saller"
}

