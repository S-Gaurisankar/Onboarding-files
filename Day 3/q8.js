var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
var checkAccess = function (user) {
    if (user.role === UserRole.Admin)
        console.log('Admin Access');
    else
        console.log('Admin Access Denied');
};
var user1 = {
    id: 1,
    name: 'Alice',
    role: UserRole.Admin
};
checkAccess(user1);
