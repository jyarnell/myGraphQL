'use strict';
import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLInt, } from 'graphql';
import Address from './inputAddressType';

export default new GraphQLInputObjectType({
    name: 'InputUser',
    description: 'Input User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        address: { type: Address }
    })
});