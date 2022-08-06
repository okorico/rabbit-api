import { Injectable } from '@nestjs/common';
import {Query, Resolver}  from '@nestjs/graphql';
@Injectable()
@Resolver()
export class AppService {
  @Query(returns => String)
    async message() {
        return "Hello, World"
    }
}