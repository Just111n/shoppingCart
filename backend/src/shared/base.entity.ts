import { ApiPropertyOptional } from '@nestjs/swagger';

export interface IBaseEntity {
  id?: string;
}

export default abstract class BaseEntity {
  @ApiPropertyOptional({
    example: '1',
    description: 'Id of model',
  })
  id?: string;
}
