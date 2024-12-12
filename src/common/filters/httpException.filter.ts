/* istanbul ignore file */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * Custom exception filter for handling HttpExceptions.
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * Handles the caught HttpException and sends an appropriate response.
   * @param exception - The caught HttpException.
   * @param host - The arguments host.
   */
  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse();

    const err = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      detail: exception.message,
      ...(typeof error === 'object' ? error : {}),
    };

    response.status(status).json(err);
  }
}
