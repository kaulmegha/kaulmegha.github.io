import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactServiceToken} from '../../services/contact/contact.service';
import {MockContactService} from '../../services/contact/mock-contact.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers: [
    {provide: ContactServiceToken, useClass: MockContactService}
  ]
})
export class ContactModule {}
