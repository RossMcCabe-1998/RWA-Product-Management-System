/** @jest-environment node */

import { test, expect } from '@jest/globals';

test('search page contains the word search', async () => {
  // Fetch the home page
  const response = await fetch('http://localhost:3000/');
  const html = await response.text();

  // Check that the word "navigation" is present in the HTML response
  expect(response.status).toBe(200);
  expect(html).toMatch("navigation");
});