import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <!-- Main Footer -->
        <div class="footer-main">
          <div class="footer-brand">
            <a href="#" class="footer-logo" aria-label="OnSocialy">
              <span class="logo-bracket">[</span>OnSocialy<span class="logo-bracket">]</span>
            </a>
            <p class="footer-tagline">
              Webs únicas para influencers únicos. 
              <strong>Primeras webs GRATIS</strong> — plazas limitadas.
            </p>
          </div>
          
          <div class="footer-links">
            <div class="footer-col">
              <span class="col-title">_navegación</span>
              <ul>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <span class="col-title">_legal</span>
              <ul>
                <li><a routerLink="/privacidad">Privacidad</a></li>
                <li><a routerLink="/terminos">Términos</a></li>
                <li><a routerLink="/cookies">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Divider -->
        <div class="footer-divider"></div>
        
        <!-- Omega Tech Section -->
        <div class="footer-bottom">
          <div class="omega-section">
            <span class="omega-pre">Un proyecto de</span>
            <a href="https://omega-studio.tech/" class="omega-badge" aria-label="Omega Tech" target="_blank" rel="noopener">
              <span class="omega-symbol">Ω</span>
              <span class="omega-text">
                <span class="omega-name">Omega Tech</span>
                <span class="omega-sub">Tecnología & Innovación</span>
              </span>
            </a>
          </div>
          <p class="copyright">
            © {{ currentYear }} OnSocialy
          </p>
        </div>
      </div>
      
      <!-- Background Gradient -->
      <div class="footer-glow"></div>
    </footer>
  `,
  styles: [`
    .heart-inline {
      display: inline-block;
      vertical-align: middle;
      color: #c6f135;
      margin: 0 2px;
    }
    .footer {
      position: relative;
      padding: 5rem 0 2rem;
      overflow: hidden;
    }
    
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(198, 241, 53, 0.3), transparent);
    }
    
    .footer-glow {
      position: absolute;
      bottom: -200px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 400px;
      background: radial-gradient(circle, rgba(198, 241, 53, 0.08) 0%, transparent 70%);
      pointer-events: none;
    }
    
    /* Main */
    .footer-main {
      display: flex;
      justify-content: space-between;
      gap: 4rem;
      padding-bottom: 3rem;
    }
    
    .footer-logo {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      display: inline-block;
    }
    
    .logo-bracket {
      color: #c6f135;
      font-weight: 400;
    }
    
    .footer-tagline {
      color: rgba(255, 255, 255, 0.5);
      margin-top: 1rem;
      max-width: 280px;
      line-height: 1.6;
    }
    
    .footer-tagline strong {
      color: #c6f135;
    }
    
    /* Links */
    .footer-links {
      display: flex;
      gap: 4rem;
    }
    
    .col-title {
      display: block;
      font-family: 'Inter', monospace;
      font-size: 0.8rem;
      color: #c6f135;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
    }
    
    .footer-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-col li {
      margin-bottom: 0.6rem;
    }
    
    .footer-col a {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }
    
    .footer-col a:hover {
      color: #c6f135;
    }
    
    /* Divider */
    .footer-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin-bottom: 2rem;
    }
    
    /* Bottom */
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    
    .omega-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .omega-pre {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.4);
    }
    
    .omega-badge {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.25rem;
      background: rgba(255, 255, 255, 0.03);
      border: 2px solid rgba(0, 255, 240, 0.2);
      transition: all 0.3s ease;
      clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
    }
    
    .omega-badge:hover {
      border-color: #00fff0;
      background: rgba(0, 255, 240, 0.05);
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0 #00fff0;
    }
    
    .omega-symbol {
      font-size: 1.75rem;
      font-weight: 700;
      background: linear-gradient(135deg, #00fff0, #c6f135);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .omega-text {
      display: flex;
      flex-direction: column;
    }
    
    .omega-name {
      font-weight: 700;
      font-size: 0.95rem;
      color: white;
    }
    
    .omega-sub {
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0.05em;
    }
    
    .copyright {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.4);
    }
    
    @media (max-width: 768px) {
      .footer-main {
        flex-direction: column;
        gap: 2.5rem;
      }
      
      .footer-links {
        gap: 3rem;
      }
      
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
      
      .omega-section {
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  `]
})
export class FooterComponent {
  protected currentYear = new Date().getFullYear();
}
