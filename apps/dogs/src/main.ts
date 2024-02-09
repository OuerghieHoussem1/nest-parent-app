import { NestFactory } from '@nestjs/core';
import { DogsModule } from './dogs.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(DogsModule);
  app.connectMicroservice({
    transport:Transport.TCP,
    options:{
      port:3003
    }
  })
  await app.startAllMicroservices()
  await app.listen(3003);
}
bootstrap();
