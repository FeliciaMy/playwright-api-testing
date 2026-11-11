import {test, expect, request} from '@playwright/test';

test('API REGISTER (NO PASSWORD) test request', async({request})=>{

const response = await request.post('https://reqres.in/api/users', {
    data:

    {
  "email": "sydney@fife"
  
}
});
expect (response.status()).toBe(201)
})