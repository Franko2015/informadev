import { HttpInterceptorFn } from '@angular/common/http';

export const keyInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
