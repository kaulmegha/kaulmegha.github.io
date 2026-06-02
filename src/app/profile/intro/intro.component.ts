import {Component} from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  onClick(id: string) {
    const element = document.querySelector('#' + id);
    if (element) element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
