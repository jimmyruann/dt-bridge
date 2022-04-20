console.log('[DT Bridge] Script was injected');

window.addEventListener('message', (ev) => {
  if (ev.source !== window || !ev.data) {
    return;
  }

  const message: WindowMessageProps = ev.data;

  if (message.type === '__DT_BRIDGE_EXTENSION_REQUEST__') {
    chrome.runtime.sendMessage(
      {
        type: 'dt-bridge|send-req',
        request: message.value,
      },
      (response) => {
        window.postMessage({
          type: '__DT_BRIDGE_EXTENSION_RESPONSE__',
          value: response,
        });
      }
    );
  }
});
