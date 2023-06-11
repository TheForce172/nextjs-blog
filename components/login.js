'use client'
import { signIn } from "next-auth/react"
const SignIn = () =>  {
    function login(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        signIn("credentials", {username :data.username, password: data.password}) 
    }
    return (
            <form onSubmit={login}>
                <label>Username<input name="username" type="text" autoComplete="username"/></label>
                <label>Password<input name="password" type="password" autoComplete="current-password"/></label>
                <button type="submit">Sign in</button>
            </form>
    )
}

export default SignIn