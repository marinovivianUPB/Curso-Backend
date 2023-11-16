import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
<<<<<<< HEAD
import { IRoleEntity } from '../../domain/entities/IRoleEntity';
@Entity()
export class RoleEntity implements IRoleEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: 'varchar', unique: true})
=======
import { IRoleEntity } from "../../domain/entities/IRoleEntity";

@Entity()
export class RoleEntity implements IRoleEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    name: string;

    @Column({ type: 'text' })
    description: string;
}