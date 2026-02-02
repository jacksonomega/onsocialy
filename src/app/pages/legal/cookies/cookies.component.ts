import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cookies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <article class="legal-page">
      <div class="legal-hero">
        <div class="hero-bg"></div>
        <div class="container">
          <h1 class="legal-title">Política de <span class="neon-text">Cookies</span></h1>
          <p class="updated">Última actualización: {{ updatedDate }}</p>
        </div>
      </div>
      
      <div class="container relative z-10">
        <div class="legal-content glass-panel">
          <section>
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. 
              Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.
            </p>
          </section>

          <section>
            <h2>2. Cookies que utilizamos</h2>
            <p>Actualmente, este sitio web utiliza las siguientes cookies:</p>
            <ul>
              <li><strong>Cookies técnicas:</strong> Son aquellas necesarias para la navegación y el buen funcionamiento de nuestra página web.</li>
              <li><strong>Cookies de análisis:</strong> (Si las hubiera en el futuro) Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico.</li>
            </ul>
          </section>

          <section>
            <h2>3. Gestión de cookies</h2>
            <p>
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador.
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
      background: radial-gradient(circle, rgba(198, 241, 53, 0.15) 0%, transparent 70%);
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
      color: #c6f135;
      margin-bottom: 1.5rem;
      display: inline-block;
      border-bottom: 2px solid rgba(198, 241, 53, 0.3);
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
      color: #c6f135;
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
export class CookiesComponent {
  updatedDate = new Date().toLocaleDateString();
}
