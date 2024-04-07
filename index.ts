import 'web-streams-polyfill/polyfill';

import { TextDecoder, TextEncoder } from 'util';
import { Buffer } from 'buffer';
import { fetch, File, Headers, FormData, Request, Response } from 'undici';

function defineGlobalProperties(prototype: PropertyDescriptorMap) {
  for (const [key, value] of Object.entries(prototype)) {
    if (typeof globalThis !== 'undefined' && !(key in globalThis)) {
      Object.defineProperty(globalThis, key, value);
    }

    if (typeof global !== 'undefined' && !(key in global)) {
      Object.defineProperty(global, key, value);
    }

    if (typeof window !== 'undefined' && !(key in window)) {
      Object.defineProperty(window, key, value);
    }
  }
}

// -------------------------

defineGlobalProperties({
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
});

// -------------------------

defineGlobalProperties({
  fetch: { value: fetch, writable: true, enumerable: true },
  File: { value: File },
  Buffer: { value: Buffer },
  Headers: { value: Headers },
  FormData: { value: FormData },
  Request: { value: Request },
  Response: { value: Response },
});

// -------------------------

export { fetch, Headers, Request, Response };
