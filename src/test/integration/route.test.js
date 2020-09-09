const request = require('supertest')
const app = require('../../../server')
describe('Get Endpoints', () => {
   it('should get a list of customers', async () => {
     const res = await request(app)
       .get('/api/customers?page=1')
       expect(res.statusCode).toEqual(200)
   })
  
 
   it('should respond with status code 404 if resource is not found', async () => {
       const res = await request(app).get('/api/customer');
       expect(res.statusCode).toEqual(404);
    });

})


