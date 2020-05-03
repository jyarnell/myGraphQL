'use strict';
import { GraphQLSchema } from 'graphql';
import RootQuery from './queries';
import RootMutation from './mutations';

// export the schema
export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});