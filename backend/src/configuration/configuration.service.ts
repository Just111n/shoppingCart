import { Injectable, Global } from '@nestjs/common';

@Global()
@Injectable()
export default class ConfigurationService {
  private environmentHosting: string = process.env.NODE_ENV || 'development';

  get(envKey: string): string {
    return process.env[envKey];
  }

  get isDevelopment() {
    return this.environmentHosting === 'development';
  }
}
