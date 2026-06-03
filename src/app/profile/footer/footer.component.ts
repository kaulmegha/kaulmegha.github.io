import {Component, inject} from '@angular/core';
import {BuildInformationToken} from '../../services/build-information';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [{provide: BuildInformationToken, useValue: environment.build}]
})
export class FooterComponent {
  buildInformation = inject(BuildInformationToken);
}
