import { spawn } from 'child_process';
import React from 'react';

// string, number, boolean, void, null
// user defined types -> object, array, enum, union, any, custom type

type UserProps = {
    user: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
}

const User = ({ user }: UserProps) => {

    const { name, age, isRegistered, lang } = user;

    return (
        <div style={{border: "1px solid", margin: "0.5rem"}}>
            <h2>{name}</h2>
            <p>{age} years old</p>
            <p>
                {isRegistered ? "Registerd student" : "Please Register"}
            </p>
            <p>
                Speaks - {lang.map((language, idx) => <span key={idx}>{language} </span>)}
            </p>
        </div>
    );
};

export default User;