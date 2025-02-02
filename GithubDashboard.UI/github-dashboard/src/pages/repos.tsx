import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getUserRepos } from "../services/githubService";

interface Repo {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    [key: string]: string | number | boolean | null | undefined; // Add other properties as needed
}

export default function Repos() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [repos, setRepos] = useState<Repo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (status === "loading") return;
        if (!session) {
            router.push(`/api/auth/signin?callbackUrl=${encodeURIComponent(router.asPath)}`);
            return;
        }

        if (session.accessToken) {
            getUserRepos(session.accessToken)
                .then((data) => {
                    console.log("API Response:", data);
                    if (Array.isArray(data)) {
                        setRepos(data);
                    } else {
                        setError("Unexpected API response format");
                    }
                })
                .catch((err) => {
                    console.error("Error fetching repos:", err);
                    setError("Failed to load repositories");
                });
        }
    }, [session, status, router]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">GitHub Repositories</h1>
            {error ? <p className="text-red-500">{error}</p> : null}
            {repos.length > 0 ? (
                <ul className="mt-4">
                    {repos.map((repo) => (
                        <li key={repo.id} className="border-b py-2">{repo.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading repositories...</p>
            )}
        </div>
    );
}