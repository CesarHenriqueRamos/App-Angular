export interface User{
    id: number;
    fist_name:string;
    last_name:string;
    avatar:string;
}
export interface ResponseUser{
    page:number;
    per_page: number;
    total:number;
    total_pages:number;
    data: User[];
}
//create
export interface RequestCreate{
    name: string;
    job:string;
}
export interface ResponceCreate{
    name: string;
    job:string;
    id:string;
    createAt: Date;
}
export interface getUser{
    data: User
}
//update
export interface RequestUpdate{
    name: string;
    job:string;
}
export interface ResponceUpdate{
    name: string;
    job:string;
    createAt: Date;
}