import {test, expect, request} from '@playwright/test';

test('API POST test request', async({request})=>{

const response = await request.post('https://reqres.in/api/users', {
    data:

    {
  "name": "felicia",
  "job": "leader"
}
});
expect (response.status()).toBe(201);

const text = await response.text();
expect(text).toContain('felicia');
console.log(await response.json());
})
