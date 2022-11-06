import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @IsNotEmpty()
    @Column()
    email?: string;

    @IsNotEmpty()
    @Column()
    password?: string;

    @Column()
    gender?: string;

    @Column()
    age?: number;
}
