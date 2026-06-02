import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {IntroComponent} from './intro/intro.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent, IntroComponent, AboutComponent,
    SkillsComponent, ExperienceComponent, EducationComponent,
    ContactComponent, FooterComponent
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {}
