import { Inject, Injectable, InjectionToken } from '@nestjs/common';

export class InjectsDecorators {
  public static InjectableCustom() {
    return Injectable();
  }

  public static InjectCustom(token: InjectionToken) {
    return Inject(token);
  }
}
