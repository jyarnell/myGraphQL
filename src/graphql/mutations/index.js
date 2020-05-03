import { GraphQLObjectType } from 'graphql';
import addUser from './addUser';

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: addUser(),
    }
});

export default mutationType;