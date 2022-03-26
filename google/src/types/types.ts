export interface IAddress{
    city:string,
    street:string
}

export interface IUser{
    name:string,
    email:string,
    address:IAddress
}