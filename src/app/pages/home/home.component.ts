import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesComponent } from '../../components/services/services';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  template: `
    <main>
      <app-hero />
      <app-services />
      <app-portfolio />
      <app-contact />
    </main>
  `
})
export class HomeComponent { }
