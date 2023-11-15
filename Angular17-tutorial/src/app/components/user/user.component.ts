import { OperatingSystem } from './../../interfaces/operating-system';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OperatingSystemsService } from '../../core/operating-systems.service';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  username: string = "Pedro";
  doesUserExist: boolean = false;
  // operatingSystems: OperatingSystem[] = [{ id: 'Win', name: 'Windows' }, { id: 'Mac', name: 'MacOS' }, { id: 'Lin', name: 'Linux' }];
  
  operatingSystemService: OperatingSystemsService = inject(OperatingSystemsService)
  operatingSystems: OperatingSystem[] = this.operatingSystemService.getOperatingSystems();


  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]
  isEditable: boolean = true;
  onMouseOver(osName: string): void {
    console.log("osName: " + osName);
  }
  emitToParent(): void {
    this.greet.emit('Hi im your child component')
  }
}
