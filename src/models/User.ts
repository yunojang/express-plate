import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ModelBase } from "@/utils/ModelBase";

@Entity()
export class User extends ModelBase {
    public comparePassword(password: string) {
        return this.password === password;
    }

    @ObjectIdColumn()
    _id!: any;

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
