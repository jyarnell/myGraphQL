import UserType from '../types/User';
import UserResolver from '../resolvers/User';
import InputUserType from '../types/inputUserType';

export default {
    name: "addUser",
    type: UserType,
    args: {
        user: { type: InputUserType }
    },
    description: 'Adds a new user',
    resolve(parent, args, context, info) {
        return UserResolver.add(parent, args);
    }
}