import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-terms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <article class="legal-page">
      <div class="legal-hero">
        <div class="hero-bg"></div>
        <div class="container">
          <h1 class="legal-title">Términos y <span class="neon-text">Condiciones</span></h1>
          <p class="updated">Última actualización: {{ updatedDate }}</p>
        </div>
      </div>
      
      <div class="container relative z-10">
        <div class="legal-content glass-panel">
          <section>
            <h2>1. Introducción</h2>
            <p>
              Bienvenido a OnSocialy. Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones.
            </p>
          </section>

          <section>
            <h2>2. Servicios</h2>
            <p>
              OnSocialy ofrece servicios de diseño y desarrollo web especializados para influencers y marcas personales.
              Las condiciones específicas de cada proyecto se detallarán en el presupuesto correspondiente.
            </p>
          </section>

          <section>
            <h2>3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio web (textos, diseños, logotipos, código) es propiedad de OnSocialy o de sus licenciantes, 
              y está protegido por las leyes de propiedad intelectual.
            </p>
          </section>

          <section>
            <h2>4. Limitación de Responsabilidad</h2>
            <p>
              OnSocialy no será responsable de daños indirectos, incidentales o consecuentes derivados del uso del sitio web o de los servicios prestados, 
              salvo en casos de negligencia grave o dolo.
            </p>
          </section>

          <section>
            <h2>5. Legislación Aplicable</h2>
            <p>
              Estos términos se rigen por la legislación española. Cualquier conflicto se someterá a los juzgados y tribunales del domicilio del usuario (si es consumidor) o de Madrid (si es empresa).
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
      background: radial-gradient(circle, rgba(255, 0, 255, 0.15) 0%, transparent 70%);
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
      color: #ff00ff;
      margin-bottom: 1.5rem;
      display: inline-block;
      border-bottom: 2px solid rgba(255, 0, 255, 0.3);
      padding-bottom: 0.5rem;
    }
    
    p, li {
      font-size: 1.1rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 1rem;
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
export class TermsComponent {
  updatedDate = new Date().toLocaleDateString();
}
