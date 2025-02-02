import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
    const { data: session } = useSession();

    return (
        <div>
            {session ? (
                <div>
                    <p>Welcome, {session.user?.name}!</p>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
            ) : (
                <button onClick={() => signIn("github", { callbackUrl: "/", force_verify: true })}>
                    Sign in with GitHub
                </button>
            )}
        </div>
    );
}
