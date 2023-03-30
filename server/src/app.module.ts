import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { PostsModule } from './posts/posts.module';
import { PostEntity } from './posts/entities/post.entity';
import { CommentsModule } from './comments/comments.module';
import { CommentEntity } from './comments/entities/comment.entity';
import { AuthModule } from './auth/auth.module';
import { DataSource } from 'typeorm';

export let dataSource: DataSource | null = null;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 8080,
        username: 'postgres',
        password: '43agitin',
        database: 'rjournal',
        entities: [UserEntity, PostEntity, CommentEntity],
        synchronize: true,
        name: 'default',
      }),
      dataSourceFactory: async (options) => {
        dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
