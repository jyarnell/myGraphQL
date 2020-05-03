'use strict';
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, } from 'graphql';
import AddressType from './Address';
import AddressController from '../resolvers/Address';

export default new GraphQLObjectType({
    name: 'User',
    description: 'User',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID of the user',
        },
        firstName: {
            type: GraphQLString,
            description: 'First name of the user',
        },
        lastName: {
            type: GraphQLString,
            description: 'Last name of the user',
        },
        address: {
            type: AddressType,
            description: 'The users\' home address',
            resolve: async (parent, args) => {
                const ret = await AddressController.get({ id: parent.homeAddressId });
                return ret.length ? ret[0] : undefined;
            }
        },
    })
});
