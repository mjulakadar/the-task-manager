import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[applyRecordingAnimations]'
})
export class RecordingDirective implements OnChanges {
    @Input() applyRecordingAnimations: boolean = false;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['applyRecordingAnimations']) {
            this.updateAnimationState();
        }
    }

    private updateAnimationState() {
        if (this.applyRecordingAnimations) {
            this.renderer.addClass(this.el.nativeElement, 'recording');
        } else {
            this.renderer.removeClass(this.el.nativeElement, 'recording');
        }
    }
}