import React, { useState, ChangeEvent } from 'react';

const NewUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event?.target.value);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event?.target.value);
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newUser = { name, email }
        console.log(newUser);

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" value={name} onChange={handleNameChange} required />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewUser;