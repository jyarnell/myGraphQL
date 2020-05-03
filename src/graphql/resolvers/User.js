'use strict';

const users = [
    {
        id: 'u1',
        firstName: 'John',
        lastName: 'Doe',
        homeAddressId: 'a1',
    },
    {
        id: 'u2',
        firstName: 'Jan',
        lastName: 'Doe',
        homeAddressId: 'a2',
    },
    {
        id: 'u3',
        firstName: 'Bob',
        lastName: 'Doe',
        homeAddressId: 'a2',
    },
];

const UserController = {
    index: (args) => {
        const filteredRet = users.filter(r => args.addressId ? r.homeAddressId === args.addressId : true);
        return Promise.resolve(filteredRet)
    }
}
export default UserController;