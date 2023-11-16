import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { IUserEntity } from '../../domain/entities/IUserEntity';
import { RoleEntity } from "./roleEntity";
@Entity()
export class UserEntity implements IUserEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: 'varchar' })
    username!: string;

    @Column({ type: 'varchar', unique: true })
    email!: string;

    @Column({ type: 'varchar' })
    passwordHash!: string;

    @Column({ type: 'timestamp' })
    createdAt!: Date;

    @Column({ type: 'timestamp', nullable: true })
    lastLogin!: Date;

<<<<<<< HEAD
    @ManyToOne(()=> RoleEntity)
    @JoinColumn({ name: 'roleId' })
    roleId!: RoleEntity;
=======
    @ManyToOne(() => RoleEntity)
    @JoinColumn({ name: 'roleId' })
    role: RoleEntity;
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
}
