'use client';

import { useState, useCallback } from 'react';

interface UseLoadingButtonOptions {
  onSuccess?: () => void | Promise<void>;
  onError?: (error: Error) => void | Promise<void>;
}

export function useLoadingButton(options: UseLoadingButtonOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (asyncFn: () => Promise<void>) => {
      setIsLoading(true);
      try {
        await asyncFn();
        await options.onSuccess?.();
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        await options.onError?.(err);
      } finally {
        setIsLoading(false);
      }
    },
    [options],
  );

  return { isLoading, execute };
}
