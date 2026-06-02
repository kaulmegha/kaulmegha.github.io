import {Component, inject} from '@angular/core';
import {NgIf} from '@angular/common';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactServiceToken} from '../../services/contact/contact.service';
import {MockContactService} from '../../services/contact/mock-contact.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [{provide: ContactServiceToken, useClass: MockContactService}]
})
export class ContactComponent {
  model!: Contact;
  submitted = false;
  success = false;
  error: unknown;

  contactFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl(''),
  });

  private contactService = inject(ContactServiceToken);

  onSubmit() {
    this.submitted = true;
    const g = this.contactFormGroup;
    this.model = new Contact(
      g.get('name')!.value!,
      g.get('email')!.value!,
      g.get('phoneNumber')!.value ?? '',
      g.get('message')!.value!
    );
    this.contactService.contactForm(this.model).subscribe({
      next: () => { this.success = true; g.reset(); },
      error: err => this.error = err
    });
  }
}
