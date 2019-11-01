import React, { useEffect } from 'react';

function Login() {

    useEffect(() => {
        fetch('/api/login')
            .then(res => res.text())
            .then(url => window.document.location = url);
    }, []);

    return (
        <h1>Login page</h1>
    )
}

export default Login;