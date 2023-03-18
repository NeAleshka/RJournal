import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { SearchPostDto } from './dto/search-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find({
      order: {
        views: 'DESC',
      },
    });
  }

  async search(dto: SearchPostDto) {
    const qb = this.repository.createQueryBuilder('p');
    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);
    qb.setParameters({
      title: `%${dto.title}%`,
      body: `%${dto.body}%`,
      tag: `%${dto.tag}%`,
    });

    dto.views && qb.orderBy('views', dto.views);
    dto.title && qb.andWhere(`p.title ILIKE :title`);
    dto.body && qb.andWhere(`p.body ILIKE :body`);
    dto.tag && qb.andWhere(`p.tag ILIKE :tag`);

    const [items, total] = await qb.getManyAndCount();
    return { items, total };
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({ id });

    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    find.views++;
    return this.repository.save(find);
  }

  async getPopular() {
    const queryBuilder = this.repository.createQueryBuilder('posts');
    queryBuilder.orderBy('views', 'DESC');

    const [posts, total] = await queryBuilder.getManyAndCount();

    return { posts, total };
    // queryBuilder.limit(2);

    /*return this.repository.find({
      order: {
        views: 'DESC',
      },
    });*/
  }

  async update(id: number, dto: UpdatePostDto) {
    const find = await this.repository.findOneBy({ id });

    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }

    return await this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
