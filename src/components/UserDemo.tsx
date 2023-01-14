import React from 'react';

type UserDemoProps = {
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}

const UserDemo = ({ users }: UserDemoProps) => {

    return (
        <div>
            { users.map((user, idx) => {

                const {name, age, email, id} = user;

                return <div key={idx}>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{age}</p>
                    <p>{id}</p>
                </div>
            }) }
        </div>
    );
};

export default UserDemo;