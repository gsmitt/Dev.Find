import React from 'react';
import GoogleLogin from 'react-google-login';

export class GoogleButton extends React.Component {
    render() {
        async function onSuccess(googleUser) {
            console.log(googleUser)
            
            const googleToken = googleUser.getAuthResponse().id_token;
            console.log(googleToken); 
            
            try {
                const res = await fetch("http://localhost:3001/auth/login-google", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ googleToken })
                });

                if (res.ok) {
                    const { accessToken, refreshToken } = await res.json();

                    localStorage.setItem("access-token", accessToken);
                    localStorage.setItem("refresh-token", refreshToken);

                }
            } catch (error) {
                console.log(error);
            }            
        }

        return (
            <>
                <GoogleLogin
                    clientId={"398949814268-jabg4a3diojfh7ut1m5kgvfrookmn651.apps.googleusercontent.com"}
                    buttonText="Log in with Google"
                    onSuccess={onSuccess}
                    onFailure={onSuccess}
                    cookiePolicy={'single_host_origin'}
                />
            </>
        );
    }
}
