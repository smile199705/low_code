import { Module } from '@nestjs/common'
import {
	ApplicationsModule, AuthModule, ComponentsModule, DatasourceModule, PagesModule, ProjectsModule,
	TagsModule, TradesModule, UserModule
} from './modules'
import { ConfigModule } from '@nestjs/config'
import * as Joi from '@hapi/joi'
import { MysqlModule } from './modules/data'

@Module({
	imports: [
		ConfigModule.forRoot({
			encoding: 'utf-8',
			envFilePath: [],
			expandVariables: true,
			ignoreEnvVars: true,
			load: [],
			validationSchema: Joi.object({
				H3_APM_SERVER_URL: Joi.string().default(''),
				H3_LATEINOS_REPORT_URL: Joi.string().default(''),
				SERVE_LISTENER_PORT: Joi.number().default(3006),
				HTTP_TIMEOUT: Joi.number().default(5000),
				HTTP_MAX_REDIRECTS: Joi.number().default(5),
				NODE_ENV: Joi.string()
					.valid('development', 'production', 'test', 'provision')
					.default('development')
			})
		}),
		MysqlModule,
		UserModule,
		AuthModule,
		PagesModule,
		ProjectsModule,
		TradesModule,
		ComponentsModule,
		ApplicationsModule,
		TagsModule,
		DatasourceModule,
	]
	// providers: [WinstonProvider]
})
export class AppModule {}

