import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entity/user'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    })
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(user)
    return this.usersRepository.save(newUser)
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, user)
    return this.usersRepository.findOne({
      where: {
        id,
      },
    })
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete({ id })
  }
}
