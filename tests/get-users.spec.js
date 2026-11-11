import {test, expect, request} from '@playwright/test';

test('API GET test request', async({request})=>{

const response = await request.get('https://reqres.in/api/users?page=2');
expect (response.status()).toBe(200);

const text = await response.text();
expect(text).toContain('George');
console.log(await response.json());
})
