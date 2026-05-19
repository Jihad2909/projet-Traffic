import { Query } from '@nestjs/graphql';

export class AuthQuery {
  @Query(() => String)
  health() {
    return 'Auth service is running';
  }
}