import { OperatingSystem } from '../interfaces/operating-system';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemsService {
  operatingSystems: OperatingSystem[] = [{ id: 'Win', name: 'Windows' }, { id: 'Mac', name: 'MacOS' }, { id: 'Lin', name: 'Linux' }];

  constructor() {
  }
  getOperatingSystems(): OperatingSystem[] {
    return this.operatingSystems;
  }
}
