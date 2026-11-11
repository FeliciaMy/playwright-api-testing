import {test, expect, request} from '@playwright/test';

test('API test USER NOT FOUND request', async({request})=>{

const response = await request.get('https://reqres.in/api/users/23');

expect (response.status()).toBe(404);


})