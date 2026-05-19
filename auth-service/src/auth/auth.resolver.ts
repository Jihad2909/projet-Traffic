import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
import { LoginInput } from './dto/login.input';
import { AuthPayload } from './types/auth.type';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => String)
  health() {
    return 'Auth service is running';
  }

  @Mutation(() => AuthPayload)
  register(@Args('input') registerInput: RegisterInput) {
    return this.authService.register(
      registerInput.email,
      registerInput.password,
      registerInput.role,
    );
  }

  @Mutation(() => AuthPayload)
  login(@Args('input') loginInput: LoginInput) {
    return this.authService.login(loginInput.email, loginInput.password);
  }
}