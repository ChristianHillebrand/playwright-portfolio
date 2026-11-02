
import { test, expect } from '@playwright/test';
import { postTestData } from './test-data/posts.data';

// 1. GET: Retrieve a post and validate its data
test('API returns a successful response with valid post data', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const post = await response.json();

  expect(post.id).toBe(1);
  expect(post.title).not.toBe('');
  expect(post.body).not.toBe('');

  expect(typeof post.id).toBe('number');
  expect(typeof post.title).toBe('string');
  expect(typeof post.body).toBe('string');
});

// 2. GET: Verify a nonexistent post returns 404
test('API returns 404 for a post that does not exist', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/9999'
  );

  expect(response.status()).toBe(404);
});

// 3. POST: Create a new post
test('API creates a new post', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'My First API Test',
        body: 'Learning API validation with Playwright',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const post = await response.json();

  expect(post.title).toBe('My First API Test');
  expect(post.body).toBe('Learning API validation with Playwright');
  expect(post.userId).toBe(1);
  expect(post.id).toBeTruthy();
});

// 4. PUT: Update an existing post
test('API updates an existing post', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated API Test',
        body: 'Testing an updated post with Playwright',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(200);

  const post = await response.json();

  expect(post.id).toBe(1);
  expect(post.title).toBe('Updated API Test');
  expect(post.body).toBe('Testing an updated post with Playwright');
  expect(post.userId).toBe(1);
});

// 5. DELETE: Delete an existing post
test('API deletes an existing post', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
});

// 6. GET: Validate response content type
test('API returns the correct content type header', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const contentType = response.headers()['content-type'];

  expect(contentType).toContain('application/json');
});

// 7. GET: Validate required response properties
test('API response contains all required post properties', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const post = await response.json();

  expect(post).toHaveProperty('userId');
  expect(post).toHaveProperty('id');
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');

  expect(Object.keys(post)).toEqual(
    expect.arrayContaining(['userId', 'id', 'title', 'body'])
  );
});

// 8-12. Data-driven GET tests using reusable test data
for (const post of postTestData) {
  test(`API validates post record ${post.id}`, async ({ request }) => {
    const response = await request.get(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );

    expect(response.status()).toBe(200);

    const actualPost = await response.json();

    expect(actualPost.id).toBe(post.id);
    expect(actualPost.title).toBe(post.expectedTitle);
    expect(actualPost.body.length).toBeGreaterThan(0);
    expect(typeof actualPost.userId).toBe('number');
  });
}

// 13. Negative test: Submit a post with missing fields
test('API handles a post with missing fields', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Incomplete Post',
      },
    }
  );

  expect(response.status()).toBe(201);

  const post = await response.json();

  expect(post.title).toBe('Incomplete Post');
});

// 14. Negative test: Submit a post with an invalid title data type
test('API handles a post with an invalid title data type', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 12345,
        body: 'Testing invalid data types',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const post = await response.json();

  expect(post.title).toBe(12345);
});
