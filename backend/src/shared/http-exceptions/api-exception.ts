import { ApiPropertyOptional } from '@nestjs/swagger';
export interface IApiException {
  statusCode?: number;
  message?: string;
  status?: string;
  error?: string;
  timestamp?: string;
  path?: string;
}
export default class ApiException implements IApiException {
  @ApiPropertyOptional()
  statusCode?: number;

  @ApiPropertyOptional()
  message?: string;

  @ApiPropertyOptional()
  status?: string;

  @ApiPropertyOptional()
  error?: string;

  @ApiPropertyOptional()
  timestamp?: string;

  @ApiPropertyOptional()
  path?: string;
}
