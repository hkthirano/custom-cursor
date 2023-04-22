import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-method1',
  templateUrl: './method1.component.html',
  styleUrls: ['./method1.component.scss']
})
export class Method1Component {
  top: any;
  left: any;

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = $event.pageY - 10 + 'px';
    this.left = $event.pageX - 10 + 'px';
  }
}
