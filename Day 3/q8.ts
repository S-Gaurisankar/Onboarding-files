enum UserRole {
    Admin, 
    Editor,
    Viewer
}

interface User{
    id : number,
    name : string,
    role : UserRole
}

const checkAccess = (user) => {
    if(user.role===UserRole.Admin)
        console.log('Admin Access');
    else
    console.log('Admin Access Denied');
}

const user1 : User = {
    id : 1,
    name : 'Alice',
    role : UserRole.Admin
}   

checkAccess(user1);