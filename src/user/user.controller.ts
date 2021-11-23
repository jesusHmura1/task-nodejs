import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("api/v1/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDTO: UserDTO) {
    return this.userService.created(userDTO);
  }

  @Get()
  findeAll() {
    return this.userService.findeAll();
  }

  @Get(":id")
  findeOne(@Param("id") id: string) {
    return this.userService.findeOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() userDTO: UserDTO) {
    return this.userService.update(id, userDTO);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.userService.delete(id);
  }
}
