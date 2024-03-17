import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entity/user'
import { UsersModule } from './modules/users/users.module'
import { ProfileModule } from './modules/profile/profile.module'
import { DatabaseModule } from './modules/database/database.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UsersModule, ProfileModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
