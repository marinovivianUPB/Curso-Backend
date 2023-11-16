import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IRoleEntity } from '../../domain/entities/IRoleEntity';
import { IPermissionEntity } from "../../domain/entities/IPermissionEntity";
@Entity()
export class PermissionEntity implements IPermissionEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: 'varchar', unique: true})
    name: string;

    @Column({ type: 'text' })
    description: string;
}