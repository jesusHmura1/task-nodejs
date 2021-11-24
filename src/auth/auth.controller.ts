import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserDTO } from "src/user/dto/user.dto";
import { AuthService } from "./auth.service";
import { localAuthGuard } from "./guards/local-auth.guard";

@ApiTags("authentication")
@Controller("api/v1/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(localAuthGuard)
  @Post("signin")
  async signIn(@Req() req) {
    return await this.authService.signIn(req.user);
  }

  @Post("signup")
  async signUp(@Body() userDTO: UserDTO) {
    return await this.authService.signUp(userDTO);;
  }
}
