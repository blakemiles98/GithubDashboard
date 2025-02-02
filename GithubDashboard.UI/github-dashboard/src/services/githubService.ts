export const getUserRepos = async (token: string) => {
    const response = await fetch("https://api.github.com/user/repos", {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
        },
    });
    return response.json();
};
