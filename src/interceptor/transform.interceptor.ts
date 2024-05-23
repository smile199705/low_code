import {
	Injectable,
	NestInterceptor,
	CallHandler,
	ExecutionContext
} from '@nestjs/common'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Logger } from '../loggers/log4js'
// import { response } from 'express'
interface Response<T> {
  code?: number;
  data?: T;
  msg?: string;
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
	public intercept (
		_context: ExecutionContext,
		next: CallHandler<T>
	): Observable<Response<T>> {
		const req = _context.getArgByIndex(1).req
		return next.handle().pipe(map((data: any) => {
			const logFormat = `{ "status": ${req.res.statusCode}, "url": "${req.url}", "method": "${req.method}", "ip": "${req.ip}", "response": ${JSON.stringify(data)}}`
			Logger.info(logFormat)
			Logger.access(logFormat)
			// console.log(data, '++++++++++++++++++')
			if (data?.code === 0 || data?.code === 500) {
				return {
					data: data['data'] || data['msg'],
					code: data['code'],
					msg: data['msg'] || data?.data['msg'] || ''
				}
			}
			return {
				data,
				code: 200,
				msg: '请求成功'
			}
		}))
	}
}
