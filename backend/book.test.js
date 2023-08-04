const app = require('./server')
const bookList = require('./model/Book')

const supertest = require('supertest')
const request = supertest(app)

test('get book list', async () => {
    const response = await request.get('/library')
    expect(response.status).toBe(200)
    expect(response.body[0].name).toBe(bookList[0].name)
})

