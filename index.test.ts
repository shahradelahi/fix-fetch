import 'fix-fetch';
import { expect } from 'chai';

it('should be defined globally', () => {
  expect(TextDecoder).to.be.a('function');
  expect(TextEncoder).to.be.a('function');
  expect(ReadableStream).to.be.a('function');
  expect(fetch).to.be.a('function');
  expect(File).to.be.a('function');
  expect(Headers).to.be.a('function');
  expect(FormData).to.be.a('function');
  expect(Request).to.be.a('function');
  expect(Response).to.be.a('function');
});

it('should send a request', async () => {
  const response = await fetch('https://httpbin.org/get');
  expect(response.status).to.equal(200);
});

it('should import fetch fom fix-fetch', async () => {
  const { fetch } = await import('fix-fetch');
  const response = await fetch('https://httpbin.org/get');
  expect(response.status).to.equal(200);
});
