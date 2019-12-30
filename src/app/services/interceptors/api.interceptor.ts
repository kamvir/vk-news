import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class ApiInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const req = request.clone({
            setHeaders: {
                'x-api-key': environment.apiKey
            }
        });

        /* Request Logs **/
        console.log('Request :: ' + JSON.stringify(req));
        /* Request Logs **/

        return next.handle(req).pipe(
            map(this.handleResponse),
            catchError(this.handleError)
        );
    }

    // Function for handling responses
    handleResponse(response: HttpEvent<any>) {
        if (response instanceof HttpResponse) {

            /* Response logs **/
            console.log('Response :: ' + JSON.stringify(response));
            /* Response logs **/
        }

        return response;
    }

    // Function for throwing error responses
    handleError(error: HttpErrorResponse) {
        /* Error logs **/
        console.log('Error :: ' + JSON.stringify(error));
        /* Error logs **/
        return throwError(error);
    }
}
