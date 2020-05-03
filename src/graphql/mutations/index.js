import { GraphQLObjectType } from 'graphql';
import addUser from './addUser';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser,
    }
});
