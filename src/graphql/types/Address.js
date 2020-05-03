'use strict';
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, } from 'graphql';
import UserType from './User';
import UserController from '../resolvers/User';

const AddressType = new GraphQLObjectType({
    name: 'Address',
    description: 'Address',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID of the address',
        },
        address1: {
            type: GraphQLString,
            description: 'address 1',
        },
        city: {
            type: GraphQLString,
            description: 'city',
        },
        state: {
            type: GraphQLString,
            description: 'state',
        },
        zip: {
            type: GraphQLString,
            description: 'zip',
        },
        users: {
            type: new GraphQLList(UserType),
            resolve: async (parent, args) => {
                const ret = await UserController.get({ addressId: parent.id });
                return ret;
            }
        },
    })
});

export default AddressType;