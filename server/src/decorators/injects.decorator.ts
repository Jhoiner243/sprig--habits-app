import { Inject, Injectable, InjectionToken } from '@nestjs/common';

export class InjectsDecorators {
  public static InjectCustom() {
    return Injectable();
  }

  public static InjectCustomRepository(token: InjectionToken) {
    return Inject(token);
  }
}
