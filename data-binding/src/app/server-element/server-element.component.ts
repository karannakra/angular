import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() element: {
    name: string;
    type: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('constructor Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called', changes);
  }
  ngOnInit(): void {
    console.log(this.header.nativeElement.textContent, 'called');
    console.log('ngOnInit Called');
  }
  ngDoCheck(): void {
    console.log('ngDocheck called');
  }
  ngAfterContentInit(): void {
    console.log(this.paragraph.nativeElement.textContent);
    console.log('ngAfterContentInit Called');
  }
  ngAfterContentChecked(): void {
    console.log('NgAfterContentChecked Called');
  }
  ngAfterViewInit(): void {
    console.log(this.header.nativeElement.textContent, 'calledMe');
    console.log('NgAfterViewInit Called');
  }
  ngAfterViewChecked(): void {
    console.log('NgAfterViewChecked Called');
  }
  ngOnDestroy(): void {
    console.log('NgOnDestory Called');
  }
}
