import {ContactService} from './contact.service';
import {Contact} from '../../models/contact';
import {Observable, of} from 'rxjs';
import {FormspreeResponse} from '../../models/response/formspree.response';
import {Injectable} from '@angular/core';

@Injectable()
export class MockContactService implements ContactService {
  contactForm(formdata: Contact): Observable<FormspreeResponse> {
    return of({next: '', ok: true});
  }
}
