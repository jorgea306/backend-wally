import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://challenge:challenge@churrasco.uk.to:27017/challenge?authMechanism=DEFAULT&authSource=admin',
    ),
  ],
})
export class MongoModule {}
