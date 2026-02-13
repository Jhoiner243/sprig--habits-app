import { Inject, Injectable, InjectionToken } from '@nestjs/common';

export function InjectableCustom () {
  return Injectable()
}

export function InjectCustom (token: InjectionToken) {
  return Inject(token)
}