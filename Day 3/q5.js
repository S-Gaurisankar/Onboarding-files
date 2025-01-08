user1 = {
    name : 'S.Gaurisankar',
    email : 'gaurisankar@v-comply.com',
    age : 22,
    address : 'Bangalore'
}

user1_extraDetails = {
    phone : 1234567890,
    isAdmin : false
}

user2 = {
    name : 'Atul',
    email : 'athul@v-comply.com',
    age : 23,
    address : 'Bangalore',
    phone : 1234567890,
    isAdmin : true
}   

const extractNameAndEmail = (user) => {
    const {name, email} = user;
    console.log(`Name is ${name} and email is ${email}`);
}

const mergeUser = (user, extraDetails) => {
    user1 = {...user, ...extraDetails};
    console.log(user1);
}

const combineUsers = (user1, user2) => {
    const allUsers = [...user1, ...user2];
    console.log(allUsers);
}

extractNameAndEmail(user1);
mergeUser(user1,user1_extraDetails);
combineUsers([user1],[user2]);
