# API Testing with Playwright

## Project Overview

This project demonstrates automated REST API testing using Playwright and JavaScript.

The tests are executed against the [Reqres API](https://reqres.in/), a hosted API designed for practising API requests and testing common HTTP operations.

The project focuses on testing user-related endpoints, validating HTTP status codes and verifying response data through automated test assertions.

## Tech Stack

- **Programming Language:** JavaScript
- **API Automation Framework:** Playwright
- **Test Runner:** Playwright Test
- **API Under Test:** Reqres REST API
- **Version Control:** Git & GitHub

## Project Objectives

- Develop practical REST API testing skills.
- Understand and implement HTTP methods.
- Automate API requests using Playwright.
- Validate API response status codes.
- Verify response content using assertions.
- Implement positive and negative API test scenarios.
- Understand how API tests are structured and executed.

## API Testing Scope

The project covers the following scenarios:

| Test Case     | HTTP Method        Description              |              Expected Status |

 Add User          POST            Create a new user                            201 Created 
 Get Users         GET             Retrieve a list of users from page 2         200 OK 
 Update User       PUT             Update an existing user's details            200 OK 
 Delete User       DELETE         Delete a user                                204 No Content 
 User Not Found    GET           Retrieve a non-existent user                  404 Not Found 

### Test Validations

The automated tests include:

- HTTP status code validation.
- Response body content validation.
- Verification of expected user information.
- Negative scenario validation for a non-existent user.
- Verification of successful API operations through expected HTTP responses.

## Project Structure

```text
api-testing/
│
├----tests/
   ── add-user.spec.js
   ── delete-user.spec.js
   ── get-users.spec.js
   ── update-users.spec.js
   ── user-notFound.spec.js

├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore


## Getting Started

### Prerequisites

- Node.js
- npm
- Git


## API Under Test

**Reqres:** https://reqres.in/

Reqres provides sample API endpoints for practising REST API testing, including user creation, retrieval, updating and deletion.

The project uses the public user endpoints to demonstrate different API testing scenarios.

**Note:** Reqres's classic demo endpoints return simulated responses. POST, PUT and DELETE operations do not persist changes to the underlying data.

## Key Learning Outcomes

Through this project, I gained practical experience in:

- Understanding REST API testing fundamentals.
- Working with HTTP methods and status codes.
- Writing API automation scripts using Playwright.
- Validating API responses using assertions.
- Testing positive and negative API scenarios.
- Understanding the structure and execution of automated API tests.
