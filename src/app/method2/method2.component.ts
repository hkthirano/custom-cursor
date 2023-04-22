import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-method2',
  templateUrl: './method2.component.html',
  styleUrls: ['./method2.component.scss'],
})
export class Method2Component implements AfterViewInit {
  @ViewChild('container') container: ElementRef | null = null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const color = '#00ff00';

    // assets/cursor.svg
    const svg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31H1V16Z" fill="${color}"/><path d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31H1V16Z" stroke="white" stroke-width="2"/></svg>`;

    const url = `url('data:image/svg+xml;charset=utf8,${encodeURIComponent(
      svg
    )}') -16 32, auto`;

    if (this.container) {
      this.renderer.setStyle(this.container.nativeElement, 'cursor', url);
    }
  }
}
