import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <nav class="nav container">
        <a href="#" class="logo" aria-label="OnSocialy - Ir al inicio">
          <span class="logo-bracket">[</span>
          <span class="logo-text">OnSocialy</span>
          <span class="logo-bracket">]</span>
        </a>
        
        <button 
          class="mobile-toggle" 
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="main-nav"
          aria-label="Abrir menú de navegación">
          <span class="hamburger" [class.open]="menuOpen()"></span>
        </button>
        
        <ul id="main-nav" class="nav-links" [class.open]="menuOpen()" role="navigation">
          <li><a href="#servicios" (click)="closeMenu()">_servicios</a></li>
          <li><a href="#portfolio" (click)="closeMenu()">_portfolio</a></li>
          <li><a href="#contacto" (click)="closeMenu()">_contacto</a></li>
          <li>
            <a href="#contacto" class="nav-cta" (click)="closeMenu()">
              <span class="cta-free">GRATIS</span>
              Empezar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: all 0.3s ease;
    }
    
    .header.scrolled {
      background: rgba(5, 5, 7, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(198, 241, 53, 0.1);
      padding: 0.75rem 0;
    }
    
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
      font-family: 'Poppins', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    
    .logo-bracket {
      color: #c6f135;
      font-weight: 400;
    }
    
    .logo-text {
      color: white;
    }
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-links a {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
      font-family: 'Inter', monospace;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }
    
    .nav-links a:hover {
      color: #c6f135;
    }
    
    .nav-cta {
      display: flex !important;
      align-items: center;
      gap: 0.5rem;
      background: #c6f135 !important;
      color: #050507 !important;
      padding: 0.625rem 1.25rem;
      font-weight: 700 !important;
      clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
      transition: all 0.2s ease;
    }
    
    .nav-cta:hover {
      background: #00fff0 !important;
      transform: translate(-2px, -2px);
      box-shadow: 2px 2px 0 #ff00ff;
    }
    
    .cta-free {
      background: #050507;
      color: #c6f135;
      font-size: 0.65rem;
      padding: 0.15rem 0.4rem;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
    
    .mobile-toggle {
      display: none;
      background: none;
      border: 2px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
      padding: 0.5rem;
      z-index: 1001;
      width: 44px;
      height: 44px;
    }
    
    .hamburger {
      display: block;
      width: 20px;
      height: 2px;
      background: #c6f135;
      position: relative;
      transition: background 0.3s ease;
    }
    
    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 2px;
      background: #c6f135;
      left: 0;
      transition: transform 0.3s ease;
    }
    
    .hamburger::before { top: -6px; }
    .hamburger::after { bottom: -6px; }
    
    .hamburger.open {
      background: transparent;
    }
    
    .hamburger.open::before {
      transform: translateY(6px) rotate(45deg);
    }
    
    .hamburger.open::after {
      transform: translateY(-6px) rotate(-45deg);
    }
    
    @media (max-width: 768px) {
      .mobile-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        /* Ensure toggle is above the menu overlay */
        position: relative; 
        z-index: 1002;
      }
      
      .nav-links {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* Solid background to prevent overlap issues */
        background: #050507; 
        /* Add blur for a premium glass feel if supported, though solid color handles readability */
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        padding: 2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1001; /* Above standard header content */
      }
      
      .nav-links.open {
        opacity: 1;
        visibility: visible;
      }
      
      .nav-links li {
        width: 100%;
        text-align: center;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.3s ease;
      }

      .nav-links.open li {
        transform: translateY(0);
        opacity: 1;
      }
      
      /* Staggered animation for menu items */
      .nav-links.open li:nth-child(1) { transition-delay: 0.1s; }
      .nav-links.open li:nth-child(2) { transition-delay: 0.15s; }
      .nav-links.open li:nth-child(3) { transition-delay: 0.2s; }
      .nav-links.open li:nth-child(4) { transition-delay: 0.25s; }
      
      .nav-links a {
        font-size: 2rem;
        display: block;
      }

      .nav-cta {
        display: inline-flex !important;
        width: auto;
        justify-content: center;
        font-size: 1.25rem !important;
        padding: 1rem 2.5rem;
      }
    }
  `],
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class HeaderComponent {
  protected isScrolled = signal(false);
  protected menuOpen = signal(false);

  protected onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  protected toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
