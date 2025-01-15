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
export type TUser = {
    role: "admin" | "faculty" | "student",
    id : string,
    iat : number,
    exp : number,
}