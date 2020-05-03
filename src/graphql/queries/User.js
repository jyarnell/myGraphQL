import {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

import UserType from '../types/User';
import UserResolver from '../resolvers/User';

export default {
    index() {
        return {
            name: "Users",
            type: new GraphQLList(UserType),
            description: 'This will return all the Users we find',
            resolve(parent, args, context, info) {
                return UserResolver.index(args);
            }
        }
    },
};