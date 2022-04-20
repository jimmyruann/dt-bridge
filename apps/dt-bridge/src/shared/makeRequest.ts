import { AxiosRequestConfig, AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeRequest = async <T = any>(config: AxiosRequestConfig) => {
  return new Promise<AxiosResponse<T>>((resolve, reject) => {
    const handleMessage = (
      ev: MessageEvent<{
        type:
          | '__DT_BRIDGE_EXTENSION_REQUEST__'
          | '__DT_BRIDGE_EXTENSION_RESPONSE__';
        value: AxiosResponse;
      }>
    ) => {
      if (ev.source !== window || !ev.data) {
        return;
      }

      if (ev.data.type === '__DT_BRIDGE_EXTENSION_RESPONSE__') {
        if (ev.data.value.status < 400) {
          resolve(ev.data.value);
          window.removeEventListener('message', handleMessage);
        } else {
          reject(ev.data.value);
          window.removeEventListener('message', handleMessage);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    window.postMessage({
      type: '__DT_BRIDGE_EXTENSION_REQUEST__',
      value: config,
    });
  });
};

export default makeRequest;
