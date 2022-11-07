import { ObjectId } from "mongodb";
import {
    Column,
    Entity,
    // PrimaryGeneratedColumn,
    ObjectIdColumn,
} from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    email?: string;

    @Column()
    password?: string;

    @Column({
        nullable: true,
    })
    gender?: string;

    @Column({
        nullable: true,
    })
    age?: number;
}
