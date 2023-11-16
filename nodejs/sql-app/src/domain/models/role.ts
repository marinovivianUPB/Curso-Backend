import { IRoleEntity } from '../entities/IRoleEntity';
import { v4 as uuidv4 } from 'uuid';

export class Role {
    id: string;
    name: string;
    description: string;

<<<<<<< HEAD
    constructor(roleEntity: IRoleEntity) {
        this.id = roleEntity.id || uuidv4();
        this.name = roleEntity.name;
        this.description = roleEntity.description;
=======
    constructor(userEntity: IRoleEntity) {
        this.id = userEntity.id || uuidv4();
        this.name = userEntity.name;
        this.description = userEntity.description;
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    }
}