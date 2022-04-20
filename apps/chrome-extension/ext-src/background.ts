import 'regenerator-runtime/runtime.js';
import axios, { AxiosRequestConfig } from 'axios';
import fetchAdapter from '@vespaiach/axios-fetch-adapter';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.scripting
      .executeScript({
        files: ['./inject.js'],
        target: {
          tabId,
        },
      })
      .then(() => {
        console.log('[DT Bridge] Script was injected.');
      })
      .catch((err) => console.log(err));
  }
});

chrome.runtime.onMessage.addListener(
  (message: ChromeMessageProps<AxiosRequestConfig>, sender, sendResponse) => {
    if (message.type === 'dt-bridge|send-req') {
      axios({
        ...message.request,
        adapter: fetchAdapter,
      })
        .then(sendResponse)
        .catch(sendResponse);
    }

    return true;
  }
);
