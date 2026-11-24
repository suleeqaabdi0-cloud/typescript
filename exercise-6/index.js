"use strict";
// 1. UserRole Enum Usage
var UserRole;
(function (UserRole) {
    UserRole["Superadmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log(canEdit(UserRole.Superadmin));
console.log(canEdit(UserRole.Moderator));
console.log(canEdit(UserRole.Viewer));
// 2. Type Assertion with 'as'
const button = document.querySelector("button");
button.disabled = true;
