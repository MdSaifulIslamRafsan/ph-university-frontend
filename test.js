/* const arr = [1, 2, 3, 4];
const result = arr.reduce((acc, item) => {
  acc.push(acc + item);
  return acc;
}, []);
console.log(result); */


const AdminPaths2 = [
    {
        name : "Dashboard",
        path: "dashboard",
        element: "AdminDashboard",
    },
    {
        name : "Users Management",
        children : [
            {
                name : "Create Admin",
                path: "create-admin",
                element: "CreateAdmin",
            },
            {
                name : "Create Faculty",
                path: "create-faculty",
                element: "CreateFaculty",
            },
            {
                name : "Create Student",
                path: "create-student",
                element: "CreateStudent",
            },
        ]
    }
]

/* const result = AdminPaths2.reduce((acc, item) => {
    if(item.path && item.element){
        acc.push({
            path : item.path,
            element : item.element,
        })
    }
    if(item.children){
        item.children.forEach(child => {
             acc.push({
                path : child.path,
                element : child.element,
            })
        })
    }

    return acc;
  }, []); */

  const result = AdminPaths2.reduce((acc , item)=> {
    if(item.path && item.element){
        acc.push({
            key : item.name,
            label : item.path
        })
    }
    if(item.children){
        acc.push({
            key : item.name,
            label : item.name,
            children : item.children.map(child => ({
                key : child.name,
                label : child.path
            }))
        })
    }

    return acc;
  }, []);
//   console.log(JSON.stringify(result));

//  Serializable objects
const obj = {
    name: "John Doe",
    age: 30,
}

const serializedObj = JSON.stringify(obj);
console.log(serializedObj);

//  non-serializable objects

const nonSerializableObj = {
    name: "John Doe",
    age: 30,
    sayHello: function() {
        console.log("Hello");
    }
}
const nonSerializable = JSON.stringify(nonSerializableObj);

console.log(nonSerializable); 