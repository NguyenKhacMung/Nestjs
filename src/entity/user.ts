// src/users/user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  // @Column(Date()))
  // CreatedAt: string;
}
