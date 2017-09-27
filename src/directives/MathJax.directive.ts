import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {
    @Input('MathJax') MathJaxInput: string;
    constructor(private el: ElementRef) {
    }
    ngOnChanges() {
      this.el.nativeElement.innerHTML = this.MathJaxInput;
      eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
      eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
    }
}
