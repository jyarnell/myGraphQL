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
    },
    upsert: (args) => {
        const { id, address1, city, state, zip } = args.address;
        if (!address1) throw "Required field missing: address1";
        if (!city) throw "Required field missing: city";
        if (!state) throw "Required field missing: state";
        if (!zip) throw "Required field missing: zip";

        let updAddress = {};

        if (id) {
            const toUpdate = this.get({ id })
            if (!toUpdate.length) throw `Address with id: '${id}' not found`;
            ret.forEach(a => {
                if (a.id === id) {
                    a.address1 = address1;
                    a.city = city;
                    a.state = state;
                    a.zip = zip;
                }
                updAddress = { ...a };
            });
        } else {
            let found = false;
            ret.forEach(a => {
                if (
                    a.address1 === address1 &&
                    a.city === city &&
                    a.state === state &&
                    a.zip === zip
                ) {
                    updAddress = { ...a };
                    found = true;
                }
            });

            if (!found) {
                updAddress = {
                    id: `a${Date.now()}`,
                    address1,
                    city,
                    state,
                    zip
                };

                ret.push(updAddress);
            }
        }

        return updAddress;
    }
}

export default AddressController;