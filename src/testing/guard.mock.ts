import { CanActivate } from '@nestjs/common';

export const guardMOck: CanActivate = {
  canActivate: jest.fn(() => true),
};
