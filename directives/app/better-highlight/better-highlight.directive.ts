import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[betterHighlightDirective]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
  }
  @HostListener('mouseenter', ['$event'])
  mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }
}
