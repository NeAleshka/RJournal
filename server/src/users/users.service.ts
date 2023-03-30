import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { SearchUserDto } from './dto/search-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  async search(dto: SearchUserDto) {
    const qb = this.repository.createQueryBuilder('u');
    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);
    qb.setParameters({
      fullName: `%${dto.fullName}%`,
      email: `%${dto.email}%`,
    });

    dto.email && qb.andWhere(`u.email ILIKE :email`);
    dto.fullName && qb.andWhere(`u.fullName ILIKE :fullName`);

    const [items, total] = await qb.getManyAndCount();
    return { items, total };
  }

  findAll() {
    return this.repository.find();
  }

  findByCond(cond: FindOneOptions<UserEntity>) {
    return this.repository.findOne(cond);
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
