import { useCallback, useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: (endpoint: string) => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async (endpoint: string) => {
        try {
            setLoading(true);
            setError(null);
            
            const result = await fetchFunction(endpoint);
            setData(result);
            return result;
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An unknown error occurred"));
            throw err;
        } finally {
            setLoading(false);
        }
    }, [fetchFunction]);

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData("");
        }
    }, [autoFetch, fetchData]);

    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;
