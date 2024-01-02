import { useEffect, useState } from "react";

export const useFetchUser = () => {
    const [user, setUser] = useState<{ name: string, id: number }>();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const randomUser = Math.floor(Math.random() * 10) + 1;
        (
            async function () {
                try {
                    setLoading(true);
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${randomUser}`);
                    const data = await response.json();
                    setUser(data);
                } catch (err: any) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            }
        )()
    }, [])

    return { user, error, loading };
};