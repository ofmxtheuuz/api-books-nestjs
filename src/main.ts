import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

import { source } from './database/source'; 

async function bootstrap() {
  source.initialize().then(async() => {
    const app = await NestFactory.create(ApiModule);
    await app.listen(3000);
  })
}
bootstrap();
