import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactData {
    name: string;
    email: string;
    instagram?: string;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private http = inject(HttpClient);
    private apiUrl = 'https://n8n.omega-studio.tech/webhook/contacto-onsocialy';

    sendContact(data: ContactData): Observable<any> {
        return this.http.post(this.apiUrl, data);
    }
}
