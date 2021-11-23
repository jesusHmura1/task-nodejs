import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPassenger, IPassengerStatus } from "src/commons/interfaces/passanger.interface";
import { PASSANGER } from "src/commons/models/models";
import { PassengerDTO } from "./dto/passanger.dto";

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSANGER.name) private readonly model: Model<IPassenger>
  ) {}

  async created(passangerDTO: PassengerDTO): Promise<IPassenger> {
    const passanger = new this.model({ ...passangerDTO });
    const newPassanger = passanger.save();
    return await newPassanger;
  }

  async findAll(): Promise<IPassenger[]> {
    const allPassengers = this.model.find();
    return await allPassengers;
  }

  async findPassanger(id: string): Promise<IPassenger> {
    const passanger = this.model.findById(id);
    return await passanger;
  }
  async update(id: string, passangerDTO: PassengerDTO): Promise<IPassenger> {
    return await this.model.findByIdAndUpdate(id, passangerDTO, { new: true });
  }
  async delete(id: string): Promise<IPassengerStatus> {
    await this.model.findByIdAndDelete(id);
    const statusPassanger: IPassengerStatus = {
      status: "deleted",
    };
    return await statusPassanger;
  }
}
