'use strict';
import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLInt, } from 'graphql';

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
        }
    })
});