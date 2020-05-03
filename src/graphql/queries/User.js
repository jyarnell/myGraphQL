import { GraphQLList } from 'graphql';

import UserType from '../types/User';
import UserResolver from '../resolvers/User';

export default {
    name: "Users",
    type: new GraphQLList(UserType),
    description: 'This will return all the Users we find',
    resolve(parent, args, context, info) {
        return UserResolver.get(args);
    }
}
