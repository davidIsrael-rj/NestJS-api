import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { authRegisterDTO } from '../src/testing/auth-register-dto.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let accessToken: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(() =>{
    app.close();
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('Registrar um novo usuário', async () => {
    const response = await request(app.getHttpServer())
    .post('/auth/register')
    .send(authRegisterDTO);

    expect(response.statusCode).toEqual(201);
    expect(typeof response.body.accessToken).toEqual('string');
  });

  it('Tentar fazer login com o novo usuário', async () => {
    const response = await request(app.getHttpServer())
    .post('/auth/login')
    .send({
      email: authRegisterDTO.email,
      password:authRegisterDTO.password
    });

    expect(response.statusCode).toEqual(201);
    expect(typeof response.body.accessToken).toEqual('string');

    accessToken = response.body.accessToken;
  });
});
