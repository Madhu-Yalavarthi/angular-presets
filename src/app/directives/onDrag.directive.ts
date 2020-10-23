import { Directive, ElementRef, Output, EventEmitter, Renderer2, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appOnDrag]',
})
export class OnDragDirective implements AfterViewInit, OnDestroy {

  @Output('emitDrop') emitDrop = new EventEmitter<FileList>();

  target;

  private eventListeners: (() => void)[] = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (this.elementRef.nativeElement) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'draggable', 'true');
      this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dragstart', (event) => this.dragStart(event)));
      // this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dragenter', (event) => this.dragEnter(event)));
      // this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dragleave', (event) => this.dragLeave(event)));
      // this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'dragover', (event) => this.dragOver(event)));
      // this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'drop', (event) => this.onDrop(event)));
    }
  }

  ngOnDestroy(): void {
    this.eventListeners.forEach((destroyFn) => destroyFn());
  }

  dragStart(event) {
    console.log("id--->", event.target.id)
    event.dataTransfer.setData("text", event.target.id);
    // this.renderer.setValue()
    // this.emitEnter.emit();
  }

  // dragEnter(event) {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   this.target = event.target;
  //   // this.emitEnter.emit();
  // }

  // dragLeave(event) {
  //   // if (this.target !== event.target) return;
  //   // this.target = undefined;
  //   this.renderer.removeClass(this.elementRef.nativeElement, 'over');
  //   // this.emitLeave.emit();
  // }

  // dragOver(event) {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   event.dataTransfer.dropEffect = 'copy';
  //   this.renderer.addClass(this.elementRef.nativeElement, 'over');
  // }

  // onDrop(event) {
  //   // console.log(event);
  //   event.stopPropagation();
  //   event.preventDefault();
  //   // console.log(event.dataTransfer.files);
  //   this.renderer.removeClass(this.elementRef.nativeElement, 'over');
  //   this.emitDrop.emit(event.dataTransfer.files);
  // }

}
