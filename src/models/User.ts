import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn("uuid")
    public id!: string;

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
