import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items) =>{
    const sidebarItems = items.reducer((acc , item) => {
        if(item.path && item.element){
            acc.push({
                key : item.name,
                label :  <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
            })
        }
        if(item.children){
            acc.push({
                key :  item.name,
                label : item.name,
                children  :  item.children.map(child => ({
                    key : child.name,
                    label :  <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
                }))

            })
           
        }
        return acc;
    }, []);
    return sidebarItems;
}