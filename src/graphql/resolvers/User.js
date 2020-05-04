'use strict'
import AddressResolver from './Address';

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
    get: (args) => {
        let filteredRet = [];
        if (args.id) {
            filteredRet = users.filter(r => r.id === args.id)
        } else if (args.addressId) {
            filteredRet = users.filter(r => r.homeAddressId === args.addressId);
        } else {
            filteredRet = users;
        }

        return Promise.resolve(filteredRet)
    },
    add: async (source, args) => {
        if (!args || !args.user) throw 'User input not found';

        const { firstName, lastName, address } = args.user;
        const addr = AddressResolver.upsert({ address });

        const newUser = {
            id: `u${Date.now()}`,
            firstName,
            lastName,
            homeAddressId: addr.id
        }
        users.push(newUser);
        return Promise.resolve(newUser);
    },
    update: async (source, args) => {
        if (!args || !args.user) throw 'User input not found';

        const { id, firstName, lastName } = args.user;
        if (!id) throw 'id requried for delete';
        const found = undefined;

        users.forEach(u => {
            if (u.id === id) {
                u.firstName = firstName;
                u.lastName = lastName;
                // TODO: Address
                found = u;
            }
        });
        if (!found) throw `User with id: '${id}' not found`;
        return Promise.resolve(found);
    },
    delete: async (source, args) => {
        const id = args.id;
        if (!id) throw 'id requried for delete';
        const toDel = await this.get({ id });
        if (!toDel.length) throw `User with id:'${id}' not found`;

        users = users.filter(u => u.id !== id);
    }
}
export default UserController;