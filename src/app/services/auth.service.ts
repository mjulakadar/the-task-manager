import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLoggedIn: boolean = true;
    private isRouterAdmin: boolean = true;

    constructor() { }

    isAuthenticated(): boolean {
        return this.isLoggedIn;
    }

    isAdmin(): boolean {
        return this.isRouterAdmin;
    }

    login(): void {
        this.isLoggedIn = true;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
