import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export interface AboutService {
  getAbout(): Observable<string[]>;
}

export const AboutServiceToken = new InjectionToken<AboutService>('AboutService');
