const request = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('get / ', () => {
        it('should return 200', () => {
            return request(server)
            .get('/trips')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
        it('should return 200', () => {
            return request(server)
            .get('/profile')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
        it('return an empty array', async () => {
            const res = await request(server).get('/trips')
            expect(res.body).toHaveLength(3);
        });
        it('return an empty array', async () => {
            const res = await request(server).get('/profile')
            expect(res.body).toHaveLength(3);
        })
        it('should return JSON', async () => {
            const res = await request(server).get('/trips');
            expect(res.type).toBe('application/json');
        });
        it('should return JSON', async () => {
            const res = await request(server).get('/profile');
            expect(res.type).toBe('application/json');
        });
    })
})