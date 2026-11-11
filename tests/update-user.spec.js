import {test, expect, request} from '@playwright/test';

test('API UPDATE test request', async({request})=>{

const response = await request.put('https://reqres.in/api/users/2', {
    data:

    {
  "name": "felicia",
  "job": "QA leader"
}
});
expect (response.status()).toBe(200);

const text = await response.text();
expect(text).toContain('QA leader');
console.log(await response.json());
})