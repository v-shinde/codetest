// role.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Module } from './module.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Module, module => module.roles)
  @JoinTable({ name: 'role_module_permission' })
  modules: Module[];
}

// module.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role.entity';
import { Permission } from './permission.entity';

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Role, role => role.modules)
  roles: Role[];

  @ManyToMany(() => Permission)
  @JoinTable({ name: 'role_module_permission', joinColumns: [{ name: 'module_id' }], inverseJoinColumns: [{ name: 'permission_id' }] })
  permissions: Permission[];
}

// permission.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Module } from './module.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Module, module => module.permissions)
  modules: Module[];
}
