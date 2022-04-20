interface WindowMessageProps<T = any> {
  type: '__DT_BRIDGE_EXTENSION_REQUEST__' | '__DT_BRIDGE_EXTENSION_RESPONSE__';
  value: T;
}

interface ChromeMessageProps<T = any> {
  type: 'dt-bridge|send-req';
  request: T;
}
