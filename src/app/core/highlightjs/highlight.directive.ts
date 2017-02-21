import { Directive, ElementRef, AfterViewInit } from '@angular/core';

declare var hljs: any;

@Directive({
  selector: 'code[msHighlight]'
})
export class HighlightDirective implements AfterViewInit {


  constructor(
    private elem: ElementRef
  ) { }

  ngAfterViewInit() {
    hljs.highlightBlock(this.elem.nativeElement);
  }

}
