export const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'type your name ...',
    validation: {
        required: {
            value: true,
            message: 'name is required'
        },
        maxLength: {
            value: 30,
            message: '30 characters max'
        }
    }
}
export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'type your name ...',
    validation: {
        required: {
            value: true,
            message: 'password is required'
        },
        minLength: {
            value: 6,
            message: 'min 6 characters'
        }
    }
}

export const desc_validation = {
    name: 'description',
    label: 'description',
    type: 'textarea',
    multiline: 3,
    id: 'description',
    placeholder: 'write description ...',
    validation: {
        required: {
            value: true,
            message: 'description is required',
        },
        maxLength: {
            value: 200,
            message: '200 characters max',
        },
    },
}
