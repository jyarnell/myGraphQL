'use strict';
import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLInt, } from 'graphql';

export default new GraphQLInputObjectType({
    name: 'InputAddress',
    description: 'Input Address',
    fields: () => ({
        id: { type: GraphQLID },
        address1: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        zip: { type: GraphQLString }
    })
});