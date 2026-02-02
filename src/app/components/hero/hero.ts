import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  template: `
    <section class="hero">
      <!-- Animated Background Elements -->
      <div class="hero-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      
      <div class="hero-content">
        <!-- FREE Badge - Super prominent -->
        <div class="free-badge animate-glow">
          <span class="free-tag">PLAZAS LIMITADAS</span>
          <span class="free-text">Gratis para las primeras webs</span>
        </div>
        
        <h1 class="hero-title">
          <span class="title-line">Webs que</span>
          <span class="title-accent neon-text">rompen moldes</span>
          <span class="title-line">para influencers</span>
        </h1>
        
        <p class="hero-description">
          No hacemos webs aburridas. Creamos experiencias digitales únicas que 
          hacen que tu audiencia diga <strong>"WOW"</strong>. Y lo mejor: 
          <span class="highlight">las primeras webs son gratis</span>.
        </p>
        
        <div class="hero-cta">
          <a href="#contacto" class="btn-brutal">
            Reservar mi plaza gratis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#portfolio" class="btn-outline">Ver ejemplos</a>
        </div>
        
        <!-- Unique Stats with Icons -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-icon">
              <lucide-icon name="rocket" [size]="32"></lucide-icon>
            </div>
            <div class="stat-content">
              <span class="stat-value">2 semanas</span>
              <span class="stat-label">Tiempo de entrega</span>
            </div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-icon">
              <lucide-icon name="dollar-sign" [size]="32"></lucide-icon>
            </div>
            <div class="stat-content">
              <span class="stat-value">0€</span>
              <span class="stat-label">Primeras webs</span>
            </div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-icon">
              <lucide-icon name="zap" [size]="32"></lucide-icon>
            </div>
            <div class="stat-content">
              <span class="stat-value">100%</span>
              <span class="stat-label">Personalizado</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Floating decorative element -->
      <div class="floating-card animate-float">
        <div class="card-preview">
          <div class="preview-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="preview-content">
            <div class="preview-bar"></div>
            <div class="preview-blocks">
              <div class="block"></div>
              <div class="block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 8rem 2rem 6rem;
      position: relative;
      overflow: hidden;
    }
    
    /* Animated Shapes */
    .hero-shapes {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }
    
    .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.5;
    }
    
    .shape-1 {
      width: 500px;
      height: 500px;
      background: linear-gradient(135deg, #c6f135 0%, transparent 70%);
      top: -150px;
      left: -100px;
      animation: float 8s ease-in-out infinite;
    }
    
    .shape-2 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, #00fff0 0%, transparent 70%);
      top: 50%;
      right: -100px;
      animation: float 10s ease-in-out infinite reverse;
    }
    
    .shape-3 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, #ff00ff 0%, transparent 70%);
      bottom: -50px;
      left: 30%;
      animation: float 12s ease-in-out infinite;
    }
    
    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
    }
    
    /* FREE Badge */
    .free-badge {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      background: rgba(198, 241, 53, 0.1);
      border: 2px solid #c6f135;
      padding: 0.75rem 1.5rem;
      margin-bottom: 2rem;
      clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
    }
    
    .free-tag {
      background: #c6f135;
      color: #050507;
      font-weight: 800;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      letter-spacing: 0.1em;
    }
    
    .free-text {
      color: #c6f135;
      font-weight: 600;
      font-size: 0.95rem;
    }
    
    /* Title */
    .hero-title {
      font-size: clamp(3rem, 8vw, 5.5rem);
      line-height: 1.05;
      margin-bottom: 1.5rem;
    }
    
    .title-line {
      display: block;
    }
    
    .title-accent {
      display: block;
      font-style: italic;
    }
    
    /* Description */
    .hero-description {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.7);
      max-width: 550px;
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }
    
    .hero-description strong {
      color: #00fff0;
    }
    
    .highlight {
      background: linear-gradient(135deg, #c6f135, #00fff0);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
    
    /* CTA */
    .hero-cta {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-bottom: 5.5rem;
    }
    
    /* Stats */
    .hero-stats {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1.5rem 2rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      max-width: fit-content;
    }
    
    .stat-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .stat-icon {
      font-size: 2rem;
    }
    
    .stat-content {
      display: flex;
      flex-direction: column;
    }
    
    .stat-value {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      color: #c6f135;
    }
    
    .stat-label {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
    }
    
    /* Floating Card */
    .floating-card {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }
    
    .card-preview {
      width: 320px;
      height: 420px;
      background: #12121a;
      border: 2px solid rgba(198, 241, 53, 0.3);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5),
                  0 0 40px rgba(198, 241, 53, 0.1);
    }
    
    .preview-dots {
      display: flex;
      gap: 6px;
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.05);
    }
    
    .preview-dots span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
    }
    
    .preview-dots span:first-child { background: #ff5f57; }
    .preview-dots span:nth-child(2) { background: #ffbd2e; }
    .preview-dots span:last-child { background: #28ca41; }
    
    .preview-content {
      padding: 20px;
    }
    
    .preview-bar {
      height: 12px;
      width: 60%;
      background: linear-gradient(90deg, #c6f135, #00fff0);
      border-radius: 6px;
      margin-bottom: 20px;
    }
    
    .preview-blocks {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    
    .block {
      height: 120px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    .block:first-child {
      background: linear-gradient(135deg, rgba(198, 241, 53, 0.1), transparent);
      border-color: rgba(198, 241, 53, 0.2);
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(-50%); }
      50% { transform: translateY(calc(-50% - 20px)); }
    }
    
    @media (max-width: 1200px) {
      .floating-card {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      .hero {
        padding: 7rem 1.5rem 4rem;
        min-height: auto;
      }
      
      .hero-stats {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
      }
      
      .stat-divider {
        display: none;
      }
      
      .free-badge {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  `]
})
export class HeroComponent { }
