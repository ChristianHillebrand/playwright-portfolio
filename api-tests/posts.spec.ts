import { test, expect } from '@playwright/test';

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

test('API returns 404 for a post that does not exist', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/9999'
  );

  expect(response.status()).toBe(404);
});

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

test('API deletes an existing post', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
});


test('API returns the correct content type header', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const contentType = response.headers()['content-type'];

  expect(contentType).toContain('application/json');
});


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


const postIds = [1, 2, 3, 4, 5];

for (const postId of postIds) {
  test(`API validates post record ${postId}`, async ({ request }) => {
    const response = await request.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    expect(response.status()).toBe(200);

    const post = await response.json();

    expect(post.id).toBe(postId);
    expect(typeof post.title).toBe('string');
    expect(post.title.length).toBeGreaterThan(0);
    expect(typeof post.body).toBe('string');
    expect(post.body.length).toBeGreaterThan(0);
  });
}
