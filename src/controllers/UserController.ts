import { Length } from "class-validator";

class BaseUser {
    @Length(3, 10)
    name?: string;
}
