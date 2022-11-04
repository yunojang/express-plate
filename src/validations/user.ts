import {
    IsEmail,
    IsIn,
    IsNotEmpty,
    IsOptional,
    Length,
    Max,
    Min,
} from "class-validator";

class BaseUser {
    @IsEmail()
    @IsNotEmpty()
    public email?: string;

    @Length(3, 10)
    @IsOptional()
    public name?: string;

    @IsIn(["male", "female"])
    @IsOptional()
    public gender?: string;

    @Min(0)
    @Max(120)
    @IsOptional()
    public age?: number;
}

export class CraeteUserBody extends BaseUser {
    @IsNotEmpty()
    public password?: string;
}
