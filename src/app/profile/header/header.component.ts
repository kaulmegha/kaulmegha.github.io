import {Component} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class HeaderComponent {
  onClick(id: string) {
    if (id === 'resume') {
      window.open('assets/resume/Resume_Megha_Kaul.pdf', '_blank');
    } else {
      const element = document.querySelector('#' + id);
      if (element) element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
