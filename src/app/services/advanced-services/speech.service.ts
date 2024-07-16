import { Injectable, NgZone } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpeechService {
    private recognition: SpeechRecognition;
    private isListening = false;

    constructor(private zone: NgZone) {
        const { webkitSpeechRecognition } = window;
        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;
    }

    startListening(callback: (text: string) => void, lang?: string) {
        if (lang) this.recognition.lang = lang;
        if (this.isListening) return;

        this.isListening = true;
        this.zone.runOutsideAngular(() => {
            this.recognition.start();
        });

        this.recognition.onresult = (event: SpeechRecognitionEvent) => {
            const text = event.results[0][0].transcript;
            this.zone.run(() => {
                callback(text);
            });
        }

        this.recognition.onerror = (event: any) => {
            console.log('Speech recognition error', event.error);
            this.stopListening();
        }

        this.recognition.onend = () => {
            this.isListening = false;
        }
    }

    stopListening() {
        if (this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
}
