import { AccountResolver } from './account.resolver';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { AccountService } from '../../services/account.service';
import { PasswordService } from '../../services/password.service';

@Module({
  providers: [AccountResolver, AccountService, PasswordService, PrismaService]
})
export class AccountModule {}
