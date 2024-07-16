// current-time.directive.ts
import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({
    selector: '[appCurrentTime]'
})
export class CurrentTimeDirective implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    private element: HTMLElement;

    constructor(private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        const timer$ = interval(1000);
        this.subscription = timer$.subscribe(() => {
            this.updateTime();
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private updateTime(): void {
        const now = new Date();
        const hours = this.pad(now.getHours());
        const minutes = this.pad(now.getMinutes());
        const seconds = this.pad(now.getSeconds());
        this.element.textContent = `${hours}:${minutes}:${seconds}`;
    }

    private pad(value: number): string {
        return value.toString().padStart(2, '0');
    }
}
