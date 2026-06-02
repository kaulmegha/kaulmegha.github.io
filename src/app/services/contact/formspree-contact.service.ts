import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactService} from './contact.service';
import {Contact} from '../../models/contact';
import {FormspreeResponse} from '../../models/response/formspree.response';

@Injectable()
export class FormspreeContactService implements ContactService {
  private http = inject(HttpClient);

  contactForm(contact: Contact): Observable<FormspreeResponse> {
    return this.http.post<FormspreeResponse>('https://formspree.io/f/xkoawnqq', contact);
  }
}
