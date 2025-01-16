import { ReactNode } from "react";

export type TSidebarProps = {
    name: string;
    path?: string;
    element?: ReactNode,
    children?: TSidebarProps[];
}

export type TRoutes = {
    path?: string;
    index?: boolean;
    element : ReactNode
}

export type TSidebarItems = {
    key : string;
    label : ReactNode;
    children?: TSidebarItems[];
}
export type TUserRoles = "admin" | "faculty" | "student"
export type TUser = {
    role: TUserRoles,
    id : string,
    iat : number,
    exp : number,
}