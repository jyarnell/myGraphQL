import {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

import PostType from '../types/Post';
import PostResolver from '../resolvers/Post';

module.exports = {
    index() {
        return {
            name: "Post",
            type: new GraphQLList(PostType),
            description: 'This will return all the posts we find in the given subreddit.',
            args: {
                subreddit: {
                    type: GraphQLString,
                    description: 'Please enter subreddit name',
                }
            },
            resolve(parent, args, context, info) {
                return PostResolver.index(args);
            }
        }
    },
};