import { useCallback, useState } from 'react';
import axios from 'axios';

export const useHttp = () => {
  const [process, setProcess] = useState('waiting');

  const request = useCallback(
    async (
      url: string,
      method = 'GET',
      body: object | null = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      setProcess('loading');

      try {
        const response = await axios({
          method: method,
          url: url,
          data: body,
          headers: headers,
        });

        return response.data;
      } catch (e) {
        setProcess('error');
        throw new Error(`Could not fetch ${url}, status: ${e}`);
      }
    },
    []
  );

  // const clearError = useCallback(() => {
  // setProcess('loading');
  // }, []);

  return {
    request,
    // clearError,
    process,
    // setProcess
  };
};
