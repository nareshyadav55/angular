import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class HttpReqInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Request Interceptor');

        const timeStamp = new Date().getTime() + '';
        let plainCreds = '';
        // add authorization header with jwt token if available
        // let currentUser = this.authenticationService.getLoggedIn();
        
        request = request.clone({
            setHeaders: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + btoa(plainCreds),
                timestamp: timeStamp
            }
        });
        console.log(request);
        return next.handle(request);
    }
}
