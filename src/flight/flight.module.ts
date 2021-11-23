import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHT } from 'src/commons/models/models';
import { PassengerModule } from 'src/passenger/passenger.module';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { flightSchema } from './schema/flight.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGHT.name,
        useFactory: () => {
          return flightSchema.plugin(require('mongoose-autopopulate'));
        },
      },
    ]),
    PassengerModule,
  ],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
