
import { APIRequestContext, APIResponse } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPost(
  request: APIRequestContext,
  postId: number
): Promise<APIResponse> {
  return await request.get(`${BASE_URL}/posts/${postId}`);
}

export async function createPost(
  request: APIRequestContext,
  postData: {
    title: string;
    body: string;
    userId: number;
  }
): Promise<APIResponse> {
  return await request.post(`${BASE_URL}/posts`, {
    data: postData,
  });
}

export async function updatePost(
  request: APIRequestContext,
  postId: number,
  postData: {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
): Promise<APIResponse> {
  return await request.put(`${BASE_URL}/posts/${postId}`, {
    data: postData,
  });
}

export async function deletePost(
  request: APIRequestContext,
  postId: number
): Promise<APIResponse> {
  return await request.delete(`${BASE_URL}/posts/${postId}`);
}
