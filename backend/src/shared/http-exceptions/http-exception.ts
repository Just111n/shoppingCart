import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(error: HttpException | any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = error.getStatus();

    if (error.getStatus() === HttpStatus.NOT_ACCEPTABLE)
      if (typeof error.response !== 'string') {
        error.response['message'] = error.response['message'] || 'Not accepted';
      }
    response.status(error.getStatus()).json({
      statusCode: error.getStatus(),
      error: error.response.name || error.name,
      message: error.response.message || error.message,
      errors: error.response.errors || null,
      timeStamp: new Date().toISOString(),
      path: request ? request.url : null,
    });
  }
}
