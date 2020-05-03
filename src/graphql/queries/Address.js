import { GraphQLList } from 'graphql';

import AddressType from '../types/Address';
import AddressResolver from '../resolvers/Address';

export default {
    name: "Addresses",
    type: new GraphQLList(AddressType),
    description: 'This will return all the Addresses we find',
    resolve(parent, args, context, info) {
        return AddressResolver.get(args);
    }
}