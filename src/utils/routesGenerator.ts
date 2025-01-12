// import { ReactNode } from "react";
import { TRoutes, TSidebarProps } from "../types";

/* type TRoutes = {
    path: string;
    element : ReactNode
} */

/* type TUserPaths = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPaths[];
} */

export const routesGenerator = (items : TSidebarProps[]) => {
  const routes = items.reduce((acc : TRoutes[], item) => {
    if(item.path){
      acc.push({
        index: true,
        element: item.element,
      })
    }
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
