const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../app');

test( "GET /api/health should return status code 200", async () => {
    
    const response = await request(app)
        .get('/api/health');

    assert.equal(response.status,200);

    assert.equal(response.body.message, "Server is healthy");
})

test("POST /api/users should create a user and return 201", async () => {

    const response =await request(app)
        .post("/api/users")
        .send({
            name: "varun",
            email: "mailvarun@gmail.com"
        })

    assert.equal(response.status, 201);

    assert.equal(response.body.message, "User created");

    assert.equal(response.body.user.name, "varun"); 
})


test("POST /api/users should reject missing email", async () => {

    const response =await request(app)
        .post("/api/users")
        .send({
            name: "varun",
        })

    assert.equal(response.status, 400);

    assert.equal(response.body.error, "Name and email are required");
})

test("POST /api/users should reject missing name", async () => {

    const response =await request(app)
        .post("/api/users")
        .send({
            name: "",
            email: "mailvarun@gmail.com"
        })

    assert.equal(response.status, 400);

    assert.equal(response.body.error, "Name and email are required");
})

