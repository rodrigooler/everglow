import React, { useState } from 'react'

export default function UserForm() {
    const [state, setState] = useState({
        name: 'Rodrigo',
        email: 'oler42@fakemail.now',
        password: '**********',
    })

    const {name, email, password} = state;

    return (
        <p>
            {name}
            {email}
            {password}
        </p>
    )
}