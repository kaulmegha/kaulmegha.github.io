export class Contact {
  id?: number;
  name: string;
  email: string;
  message: string;
  phone?: string;

  constructor(name: string, email: string, phone: string, message: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
  }
}
