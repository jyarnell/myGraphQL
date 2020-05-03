'use strict';
import {
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql';

// import the user query file we created
import PostQuery from './queries/Post';
import UserQuery from './queries/User';
import AddressQuery from './queries/Address';


// lets define our root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'This is the default root query provided by our application',
    fields: {
        posts: PostQuery.index(),
        users: UserQuery.index(),
        addresses: AddressQuery.index(),
    },
});
// export the schema
export default new GraphQLSchema({
    query: RootQuery
});