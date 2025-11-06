import { useState, useCallback } from "react";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export const useApi = <T = any>(
  apiFunc: (...args: any[]) => Promise<T>,
  options?: UseApiOptions<T>
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (...args: any[]) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunc(...args);
        setData(result);
        options?.onSuccess?.(result);
        return result;
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message || err.message || "Đã xảy ra lỗi";
        setError(errorMessage);
        options?.onError?.(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunc, options]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
};
