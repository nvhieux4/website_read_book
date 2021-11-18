export interface Book {
    nameBook:string,
    nameAuthor:string,
    description:string,
    category:string,
    view:number,
    linkImg: string,
    writing:string,
    nominate:number
}

export interface Category {
    id:number,
    name:string
}

export interface User {
    username?:string,
    email:string,
    password:string,
}