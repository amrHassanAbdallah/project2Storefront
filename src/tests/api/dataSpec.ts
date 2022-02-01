import app from '../../app';
import supertest from 'supertest';
import {equal} from 'assert';

const request = supertest.agent(app);


describe('Test data listing', () => {
    it('should return sucess when listing', async () => {
        await request.get('/api/v1/data').send().expect(200);
    });
});
