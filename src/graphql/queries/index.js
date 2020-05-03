'use strict';
import { GraphQLObjectType } from 'graphql';

import PostQuery from './Post';
import UserQuery from './User';
import AddressQuery from './Address';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'This is the default root query provided by our application',
    fields: {
        posts: PostQuery.index(),
        users: UserQuery(),
        addresses: AddressQuery(),
    },
});

export default RootQuery;