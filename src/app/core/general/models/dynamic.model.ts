import { Type } from '@angular/core';

export class DynamicTab {
  constructor(
    public address?: string,
    public data?: any,
    public component?: Type<any>,
    public urlData?: any,
    public onActiveTab?: Function
  ) { }
}
