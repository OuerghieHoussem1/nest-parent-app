import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  app.connectMicroservice({
    transport:Transport.TCP,
    options:{
      port:3002
    }
  })
  await app.startAllMicroservices()
  await app.listen(3002);
}
bootstrap();
