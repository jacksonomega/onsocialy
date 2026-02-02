import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  template: `
    <section id="servicios" class="services section">
      <div class="section-header">
        <span class="section-tag">// SERVICIOS</span>
        <h2 class="section-title">
          ¿Qué hacemos <span class="neon-text">diferente</span>?
        </h2>
        <p class="section-subtitle">
          No somos una agencia más. Creamos webs que la gente recuerda.
        </p>
      </div>
      
      <!-- Marquee -->
      <div class="marquee-wrapper">
        <div class="marquee">
          <div class="marquee-content">
            @for (word of marqueeWords; track word) {
              <span class="marquee-word">{{ word }}</span>
              <span class="marquee-separator">✦</span>
            }
            @for (word of marqueeWords; track word) {
              <span class="marquee-word">{{ word }}</span>
              <span class="marquee-separator">✦</span>
            }
          </div>
        </div>
      </div>
      
      <!-- Bento Services Grid -->
      <div class="services-bento">
        @for (service of services; track service.number; let i = $index) {
          <article 
            class="service-card" 
            [class]="'card-' + (i + 1)"
            [style.--accent]="service.accent">
            
            <!-- Floating number -->
            <div class="card-number">{{ service.number }}</div>
            
            <!-- Icon with glow -->
            <div class="card-icon-wrapper">
              <div class="icon-glow"></div>
              <div class="card-icon">
                <lucide-icon [name]="service.icon" [size]="28"></lucide-icon>
              </div>
            </div>
            
            <!-- Content -->
            <div class="card-content">
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-desc">{{ service.description }}</p>
            </div>
            
            <!-- Hover indicator -->
            <div class="card-indicator">
              <span class="indicator-line"></span>
              <span class="indicator-dot"></span>
            </div>
            
            <!-- Decorative corner -->
            <div class="card-corner"></div>
          </article>
        }
      </div>
      
      <!-- Free CTA -->
      <div class="free-cta-section">
        <div class="free-box">
          <div class="free-icon-big">
            <lucide-icon name="gift" [size]="64"></lucide-icon>
          </div>
          <div class="free-content">
            <span class="free-label">⚡ PLAZAS LIMITADAS</span>
            <h3>Las primeras webs son <span class="neon-text">GRATIS</span></h3>
            <p>Solo para los primeros influencers que confíen en nosotros. Sin trucos, sin letras pequeñas.</p>
          </div>
          <a href="#contacto" class="btn-brutal">
            Reservar mi plaza →
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      position: relative;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-tag {
      display: inline-block;
      font-family: 'Inter', monospace;
      font-size: 0.85rem;
      color: #c6f135;
      margin-bottom: 1rem;
      letter-spacing: 0.1em;
    }
    
    /* Marquee */
    .marquee-wrapper {
      overflow: hidden;
      padding: 2rem 0;
      margin: 2rem -2rem;
      background: rgba(198, 241, 53, 0.05);
      border-top: 1px solid rgba(198, 241, 53, 0.2);
      border-bottom: 1px solid rgba(198, 241, 53, 0.2);
    }
    
    .marquee {
      display: flex;
    }
    
    .marquee-content {
      display: flex;
      align-items: center;
      gap: 2rem;
      animation: marquee 30s linear infinite;
      white-space: nowrap;
    }
    
    .marquee-word {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.3);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    
    .marquee-separator {
      color: #c6f135;
      font-size: 1rem;
    }
    
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    
    /* Bento Grid */
    .services-bento {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 1.25rem;
      margin-top: 3rem;
    }
    
    /* Card positions */
    .card-1 { grid-column: span 4; }
    .card-2 { grid-column: span 5; }
    .card-3 { grid-column: span 3; }
    .card-4 { grid-column: span 3; }
    .card-5 { grid-column: span 5; }
    .card-6 { grid-column: span 4; }
    
    /* Card Base */
    .service-card {
      --accent: #c6f135;
      position: relative;
      padding: 2rem;
      min-height: 280px;
      background: linear-gradient(
        145deg,
        rgba(18, 18, 26, 0.9) 0%,
        rgba(10, 10, 15, 0.95) 100%
      );
      border: 1px solid rgba(255, 255, 255, 0.06);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .service-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        color-mix(in srgb, var(--accent) 10%, transparent) 0%,
        transparent 60%
      );
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    
    .service-card:hover {
      transform: translateY(-8px);
      border-color: color-mix(in srgb, var(--accent) 40%, transparent);
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 60px color-mix(in srgb, var(--accent) 15%, transparent);
    }
    
    .service-card:hover::before {
      opacity: 1;
    }
    
    /* Number */
    .card-number {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-family: 'Poppins', sans-serif;
      font-size: 4rem;
      font-weight: 800;
      line-height: 1;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
      transition: all 0.4s ease;
    }
    
    .service-card:hover .card-number {
      -webkit-text-stroke-color: var(--accent);
      opacity: 0.5;
    }
    
    /* Icon */
    .card-icon-wrapper {
      position: relative;
      width: 70px;
      height: 70px;
      margin-bottom: 1.5rem;
    }
    
    .icon-glow {
      position: absolute;
      inset: -10px;
      background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
      opacity: 0;
      filter: blur(20px);
      transition: opacity 0.4s ease;
    }
    
    .service-card:hover .icon-glow {
      opacity: 0.4;
    }
    
    .card-icon {
      position: relative;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.25rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      clip-path: polygon(
        0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%
      );
      transition: all 0.4s ease;
    }
    
    .service-card:hover .card-icon {
      background: color-mix(in srgb, var(--accent) 15%, transparent);
      border-color: var(--accent);
    }
    
    /* Content */
    .card-content {
      margin-top: auto;
      position: relative;
      z-index: 2;
    }
    
    .card-title {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }
    
    .service-card:hover .card-title {
      color: var(--accent);
    }
    
    .card-desc {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    /* Indicator */
    .card-indicator {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.4s ease;
    }
    
    .service-card:hover .card-indicator {
      opacity: 1;
      transform: translateX(0);
    }
    
    .indicator-line {
      width: 30px;
      height: 2px;
      background: var(--accent);
    }
    
    .indicator-dot {
      width: 8px;
      height: 8px;
      background: var(--accent);
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    
    /* Corner */
    .card-corner {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border-left: 2px solid transparent;
      border-top: 2px solid transparent;
      transition: all 0.4s ease;
    }
    
    .service-card:hover .card-corner {
      border-color: var(--accent);
    }
    
    /* Free CTA */
    .free-cta-section {
      margin-top: 5rem;
    }
    
    .free-box {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      padding: 3rem;
      background: linear-gradient(
        135deg,
        rgba(198, 241, 53, 0.06) 0%,
        rgba(0, 255, 240, 0.03) 100%
      );
      border: 2px solid rgba(198, 241, 53, 0.25);
      position: relative;
      overflow: hidden;
    }
    
    .free-box::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(198, 241, 53, 0.1) 0%, transparent 70%);
      pointer-events: none;
    }
    
    .free-icon-big {
      font-size: 4rem;
      flex-shrink: 0;
    }
    
    .free-label {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #c6f135;
      margin-bottom: 0.5rem;
    }
    
    .free-content {
      flex-grow: 1;
    }
    
    .free-content h3 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    .free-content p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1rem;
    }
    
    @media (max-width: 1024px) {
      .services-bento {
        grid-template-columns: repeat(6, 1fr);
      }
      
      .card-1, .card-2, .card-3,
      .card-4, .card-5, .card-6 {
        grid-column: span 3;
      }
    }
    
    @media (max-width: 768px) {
      .services-bento {
        grid-template-columns: 1fr;
      }
      
      .card-1, .card-2, .card-3,
      .card-4, .card-5, .card-6 {
        grid-column: span 1;
      }
      
      .service-card {
        min-height: 220px;
      }
      
      .free-box {
        flex-direction: column;
        text-align: center;
        padding: 2rem;
        gap: 1.5rem;
      }
      
      .marquee-word {
        font-size: 1rem;
      }
    }
  `]
})
export class ServicesComponent {
  protected marqueeWords = [
    'DISEÑO ÚNICO', 'GRATIS', 'RÁPIDO', 'RESPONSIVE', 'SEO', 'MODERNO',
    'PERSONALIZADO', 'CREATIVO', 'DIFERENTE'
  ];

  protected services: Service[] = [
    {
      number: '01',
      title: 'Diseño sin plantillas',
      description: 'Nada de templates aburridos. Cada pixel pensado para ti.',
      icon: 'palette',
      accent: '#c6f135'
    },
    {
      number: '02',
      title: 'Ultra rápido',
      description: 'Webs que cargan en menos de 1 segundo. Tus fans no esperan.',
      icon: 'zap',
      accent: '#00fff0'
    },
    {
      number: '03',
      title: 'Mobile first',
      description: 'El 80% viene del móvil. Lo tenemos muy claro.',
      icon: 'smartphone',
      accent: '#ff00ff'
    },
    {
      number: '04',
      title: 'SEO integrado',
      description: 'Que Google te encuentre es básico. Lo hacemos bien.',
      icon: 'search',
      accent: '#ff6b35'
    },
    {
      number: '05',
      title: 'Soporte real',
      description: 'Personas reales que responden. No bots, no tickets eternos.',
      icon: 'message-square',
      accent: '#c6f135'
    },
    {
      number: '06',
      title: 'Actualizaciones',
      description: 'Tu web crece contigo. Cambios cuando los necesites.',
      icon: 'refresh-cw',
      accent: '#00fff0'
    }
  ];
}
