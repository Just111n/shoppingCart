import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import ConfigurationService from './configuration/configuration.service';
import { EConfiguration } from './configuration/configuration.enum';
import { ProductsModule } from './products/products.module';
import { CheckoutModule } from './checkout/checkout.module';

const isDev = new ConfigurationService().isDevelopment;

@Module({
  imports: [
    SharedModule,
    ConfigModule.forRoot({
      envFilePath: isDev ? 'dev.env' : '',
    }),
    ProductsModule,
    CheckoutModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigurationService],
})
export class AppModule {
  static host: string;
  static port: number | string;
  static isDev: boolean;

  constructor(private readonly _configurationService: ConfigurationService) {
    AppModule.host = _configurationService.get(EConfiguration.HOST);
    AppModule.port = AppModule.normalizePort(
      _configurationService.get(EConfiguration.PORT),
    );
    AppModule.isDev = _configurationService.isDevelopment;
  }

  private static normalizePort(inputPort: string | number): number | string {
    const portNumber =
      typeof inputPort === 'string' ? parseInt(inputPort) : inputPort;
    if (Number.isNaN(portNumber)) return inputPort;
    else if (portNumber >= 0) return portNumber;
  }
}
