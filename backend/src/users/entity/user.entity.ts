import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    type: 'varchar',
    length: 30,
  })
  user_id: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', length: 30, comment: '유저 이름' })
  name: string;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  created_at: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updated_at: Date;

  @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
  deleted_at?: Date | null;
}
