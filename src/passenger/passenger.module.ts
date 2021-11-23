import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PASSANGER } from "src/commons/models/models";
import { PassengerController } from "./passenger.controller";
import { PassengerService } from "./passenger.service";
import { PassengerSchema } from "./schema/passanger.schema";

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASSANGER.name,
        useFactory: () => {
          return PassengerSchema;
        },
      },
    ]),
  ],
  controllers: [PassengerController],
  providers: [PassengerService],
  exports:[PassengerService],
})
export class PassengerModule {}
