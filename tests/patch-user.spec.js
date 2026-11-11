import {test, expect, request} from '@playwright/test';

test('API PATCH test request', async({request})=>{

const response = await request.patch('https://reqres.in/api/users/2', {
    data:

    {

  "last_name": "Edwardss"
}
});
expect (response.status()).toBe(200);

const text = await response.text();

})