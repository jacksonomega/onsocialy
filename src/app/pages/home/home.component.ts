import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesComponent } from '../../components/services/services';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { ContactComponent } from '../../components/contact/contact';
import { SeoService } from '../../services/seo.service';

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
export class HomeComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Diseño Web Profesional para Influencers y Creadores',
      description: 'Agencia de diseño web especializada en influencers y creadores de contenido. Creamos webs únicas que potencian tu marca personal. ¡Primera web GRATIS!',
      keywords: ['diseño web influencers', 'creadores de contenido', 'marca personal', 'agencia web', 'portfolio online'],
      canonicalUrl: '/'
    });

    this.seoService.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'OnSocialy',
      'image': 'https://onsocialy.com/assets/images/og-default.jpg',
      'description': 'Diseño web profesional y exclusivo para influencers y creadores de contenido.',
      'url': 'https://onsocialy.com',
      'telephone': '', // Add if available
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Madrid',
        'addressCountry': 'ES'
      },
      'sameAs': [
        'https://instagram.com/onsocialy',
        'https://twitter.com/onsocialy'
      ]
    });
  }
}
