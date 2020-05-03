'use strict';

const ret = [
    {
        id: 'a1',
        address1: '123 Main',
        city: 'Saint Charles',
        state: 'MO',
        zip: '63301',
    },
    {
        id: 'a2',
        address1: '567 Main',
        city: 'Saint Charles',
        state: 'MO',
        zip: '63303',
    }
];

const AddressController = {
    get: (args) => {
        const filteredRet = ret.filter(r => args.id ? r.id === args.id : true);
        return Promise.resolve(filteredRet)
    }
}

export default AddressController;