import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appTypingAnimation]'
})
export class TypingAnimationDirective implements OnInit {
    @Input('appTypingAnimation') texts: string[] = [];
    @Input() typingSpeed: number = 100;
    @Input() delayBetweenTexts: number = 2000; // Delay before switching to the next text

    private currentIndex: number = 0;
    private element: HTMLElement;

    constructor(private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        if (this.texts.length > 0) {
            this.typeWriter();
        }
    }

    private typeWriter() {
        let i = 0;
        this.element.innerHTML = '';
        const currentText = this.texts[this.currentIndex];

        const type = () => {
            if (i < currentText.length) {
                this.element.innerHTML += currentText.charAt(i);
                i++;
                setTimeout(type, this.typingSpeed);
            } else {
                setTimeout(() => this.deleteText(), this.delayBetweenTexts);
            }
        }
        type();
    }

    private deleteText() {
        let i = this.element.innerHTML.length;

        const deleteChar = () => {
            if (i > 0) {
                this.element.innerHTML = this.element.innerHTML.slice(0, -1);
                i--;
                setTimeout(deleteChar, this.typingSpeed / 2);
            } else {
                this.currentIndex = (this.currentIndex + 1) % this.texts.length;
                this.typeWriter();
            }
        }
        deleteChar();
    }
}
