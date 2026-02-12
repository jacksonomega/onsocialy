import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-privacy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <article class="legal-page">
      <div class="legal-hero">
        <div class="hero-bg"></div>
        <div class="container">
          <h1 class="legal-title">Política de <span class="neon-text">Privacidad</span></h1>
          <p class="updated">Última actualización: {{ updatedDate }}</p>
        </div>
      </div>
      
      <div class="container relative z-10">
        <div class="legal-content glass-panel">
          <section>
            <h2>1. Responsable del Tratamiento</h2>
            <p>
              OnSocialy (en adelante, "nosotros") se compromete a proteger la privacidad de sus usuarios. 
              Esta Política de Privacidad explica cómo recopilamos, usamos y divulgamos su información.
            </p>
          </section>

          <section>
            <h2>2. Datos que Recopilamos</h2>
            <p>Podemos recopilar los siguientes datos personales cuando interactúas con nuestra web:</p>
            <ul>
              <li>Nombre y apellidos.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Perfil de redes sociales (Instagram, etc.).</li>
              <li>Cualquier otra información que nos facilites en el formulario de contacto.</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalidad del Tratamiento</h2>
            <p>Usamos tus datos para:</p>
            <ul>
              <li>Responder a tus consultas y solicitudes de presupuesto.</li>
              <li>Prestar los servicios contratados de diseño web.</li>
              <li>Enviarte comunicaciones relacionadas con nuestros servicios (solo si has dado tu consentimiento).</li>
            </ul>
          </section>

          <section>
            <h2>4. Tus Derechos</h2>
            <p>
              Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos reconocidos por el RGPD.
              Para ejercerlos, puedes contactarnos en: <strong>hola&#64;onsocialy.com</strong> (EDITAR CON EMAIL REAL).
            </p>
          </section>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .legal-page {
      min-height: 100vh;
      padding-bottom: 6rem;
      position: relative;
    }

    .legal-hero {
      padding: 12rem 0 4rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      top: -50%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(0, 255, 240, 0.15) 0%, transparent 70%);
      filter: blur(60px);
      z-index: 0;
    }

    .legal-title {
      font-size: clamp(3rem, 6vw, 5rem);
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .updated {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.5);
      position: relative;
      z-index: 1;
    }

    .glass-panel {
      background: rgba(18, 18, 26, 0.6);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 4rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    section {
      margin-bottom: 3.5rem;
    }

    section:last-child {
      margin-bottom: 0;
    }
    
    h2 {
      font-size: 1.75rem;
      color: #00fff0;
      margin-bottom: 1.5rem;
      display: inline-block;
      border-bottom: 2px solid rgba(0, 255, 240, 0.3);
      padding-bottom: 0.5rem;
    }
    
    p, li {
      font-size: 1.1rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 1rem;
    }
    
    ul {
      margin-left: 1.5rem;
      margin-top: 1rem;
    }

    li {
      padding-left: 0.5rem;
    }

    li::marker {
      color: #00fff0;
    }

    strong {
      color: #00fff0;
    }

    @media (max-width: 768px) {
      .glass-panel {
        padding: 2rem;
      }
      .legal-hero {
        padding: 8rem 0 3rem;
      }
    }
  `]
})
export class PrivacyComponent implements OnInit {
  updatedDate = new Date().toLocaleDateString();
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Política de Privacidad',
      description: 'Consulta nuestra Política de Privacidad para saber cómo protegemos tus datos personales en OnSocialy.',
      keywords: ['privacidad', 'protección de datos', 'rgpd', 'onsocialy'],
      canonicalUrl: '/privacidad'
    });
  }
}
