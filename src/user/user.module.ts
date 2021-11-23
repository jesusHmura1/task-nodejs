import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { USER } from "src/commons/models/models";
import { USerSchema } from "./schema/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: USER.name,
        useFactory: () => {
          return USerSchema;
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
