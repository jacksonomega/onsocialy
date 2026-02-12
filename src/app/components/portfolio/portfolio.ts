import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Project {
  name: string;
  category: string;
  emoji: string;
  year: string;
  tags: string[];
  url: string;
}

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  template: `
    <section id="portfolio" class="portfolio section">
      <div class="section-header">
        <span class="section-tag">// PORTFOLIO</span>
        <h2 class="section-title">
          Webs que hemos <span class="neon-text">lanzado</span>
        </h2>
        <p class="section-subtitle">
          Cada proyecto es único. Ninguno se parece al anterior.
        </p>
      </div>
      
      <!-- Portfolio List -->
      <div class="portfolio-list">
        @for (project of projects; track project.name; let i = $index) {
          <article class="project-row" [style.--delay.ms]="i * 100">
            <div class="project-index">{{ formatIndex(i) }}</div>
            
            <div class="project-main">
              <div class="project-emoji">
                <lucide-icon [name]="project.emoji" [size]="24"></lucide-icon>
              </div>
              <div class="project-info">
                <h3 class="project-name">{{ project.name }}</h3>
                <span class="project-category">{{ project.category }}</span>
              </div>
            </div>
            
            <div class="project-tags">
              @for (tag of project.tags; track tag) {
                <span class="tag">{{ tag }}</span>
              }
            </div>
            
            <div class="project-year">{{ project.year }}</div>
            
            <div class="project-status">
              <span class="status-dot"></span>
              <span class="status-text">LIVE</span>
            </div>
            
            <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver proyecto {{ project.name }}">
              <span class="link-text">Ver</span>
              <span class="link-arrow">↗</span>
            </a>
            
            <!-- Hover line -->
            <div class="row-hover-line"></div>
          </article>
        }
      </div>
      
      <!-- Stats Row -->
      <div class="stats-row">
        <div class="stat-box">
          <span class="stat-icon">
            <lucide-icon name="rocket" [size]="32"></lucide-icon>
          </span>
          <div class="stat-content">
            <span class="stat-number">2</span>
            <span class="stat-label">Proyectos lanzados</span>
          </div>
        </div>
        
        <div class="stat-box highlight">
          <span class="stat-icon">
            <lucide-icon name="dollar-sign" [size]="32"></lucide-icon>
          </span>
          <div class="stat-content">
            <span class="stat-number">0€</span>
            <span class="stat-label">Primeras webs gratis</span>
          </div>
        </div>
        
        <div class="stat-box">
          <span class="stat-icon">
            <lucide-icon name="sparkles" [size]="32"></lucide-icon>
          </span>
          <div class="stat-content">
            <span class="stat-number">100%</span>
            <span class="stat-label">Clientes felices</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header {
      margin-bottom: 4rem;
    }
    
    .section-tag {
      display: inline-block;
      font-family: 'Inter', monospace;
      font-size: 0.85rem;
      color: #c6f135;
      margin-bottom: 1rem;
      letter-spacing: 0.1em;
    }
    
    /* Portfolio List */
    .portfolio-list {
      display: flex;
      flex-direction: column;
    }
    
    .project-row {
      display: grid;
      grid-template-columns: 60px 1fr auto auto auto auto;
      align-items: center;
      gap: 2rem;
      padding: 1.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .project-row:first-child {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    
    .project-row:hover {
      background: linear-gradient(90deg, transparent, rgba(198, 241, 53, 0.03), transparent);
    }
    
    /* Hover Line */
    .row-hover-line {
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #c6f135, #00fff0);
      transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .project-row:hover .row-hover-line {
      width: 100%;
    }
    
    /* Index */
    .project-index {
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.25);
      transition: color 0.3s ease;
    }
    
    .project-row:hover .project-index {
      color: #c6f135;
    }
    
    /* Main */
    .project-main {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }
    
    .project-emoji {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      clip-path: polygon(
        0 20%, 20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%
      );
      transition: all 0.3s ease;
    }
    
    .project-row:hover .project-emoji {
      background: rgba(198, 241, 53, 0.1);
      border-color: rgba(198, 241, 53, 0.3);
      transform: scale(1.1) rotate(-3deg);
    }
    
    .project-info {
      display: flex;
      flex-direction: column;
    }
    
    .project-name {
      font-size: 1.35rem;
      font-weight: 700;
      transition: color 0.3s ease;
    }
    
    .project-row:hover .project-name {
      color: #c6f135;
    }
    
    .project-category {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.4);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    /* Tags */
    .project-tags {
      display: flex;
      gap: 0.5rem;
    }
    
    .tag {
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.35rem 0.75rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;
    }
    
    .project-row:hover .tag {
      border-color: rgba(198, 241, 53, 0.3);
      color: rgba(255, 255, 255, 0.8);
    }
    
    /* Year */
    .project-year {
      font-family: 'Inter', monospace;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.3);
    }
    
    /* Status */
    .project-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .status-dot {
      width: 8px;
      height: 8px;
      background: #00fff0;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 240, 0.4); }
      50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(0, 255, 240, 0); }
    }
    
    .status-text {
      font-size: 0.7rem;
      font-weight: 700;
      color: #00fff0;
      letter-spacing: 0.1em;
    }
    
    /* Link */
    .project-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.25rem;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.6);
      font-weight: 600;
      font-size: 0.85rem;
      transition: all 0.3s ease;
    }
    
    .project-link:hover,
    .project-row:hover .project-link {
      background: #c6f135;
      border-color: #c6f135;
      color: #050507;
    }
    
    .link-arrow {
      transition: transform 0.3s ease;
    }
    
    .project-link:hover .link-arrow {
      transform: translate(2px, -2px);
    }
    
    /* Stats */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 4rem;
    }
    
    .stat-box {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.5rem 2rem;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      transition: all 0.3s ease;
    }
    
    .stat-box:hover {
      border-color: rgba(198, 241, 53, 0.3);
      background: rgba(198, 241, 53, 0.03);
    }
    
    .stat-box.highlight {
      background: rgba(198, 241, 53, 0.08);
      border-color: rgba(198, 241, 53, 0.25);
    }
    
    .stat-icon {
      font-size: 2rem;
    }
    
    .stat-content {
      display: flex;
      flex-direction: column;
    }
    
    .stat-number {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      color: #c6f135;
    }
    
    .stat-label {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
    }
    
    @media (max-width: 1024px) {
      .project-row {
        grid-template-columns: 40px 1fr auto auto;
        gap: 1.5rem;
      }
      
      .project-tags,
      .project-year {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      .project-row {
        grid-template-columns: 1fr auto;
        gap: 1rem;
        padding: 1.25rem 0;
      }
      
      .project-index {
        display: none;
      }
      
      .project-status {
        display: none;
      }
      
      .project-emoji {
        width: 44px;
        height: 44px;
        font-size: 1.35rem;
      }
      
      .project-name {
        font-size: 1.1rem;
      }
      
      .stats-row {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .stat-box {
        padding: 1.25rem 1.5rem;
      }
      
      .stat-number {
        font-size: 1.5rem;
      }
    }
  `]
})
export class PortfolioComponent {
  protected projects: Project[] = [
    {
      name: 'El Ambiental',
      category: 'Comedia',
      emoji: 'smile',
      year: '2026',
      tags: ['Web', 'Personaje'],
      url: 'https://elambiental.es'
    },
    {
      name: 'Miguel Ricote',
      category: 'Música',
      emoji: 'music',
      year: '2026',
      tags: ['Web', 'Cantautor'],
      url: 'https://miguelricote.com'
    },
    {
      name: 'Tiago Felipe',
      category: 'Música',
      emoji: 'music',
      year: '2026',
      tags: ['Web', 'Cantautor'],
      url: 'https://tiagofelipe.onsocialy.com'
    },
    {
      name: 'Rayner Melth',
      category: 'Música',
      emoji: 'music',
      year: '2026',
      tags: ['Web', 'Cantautor'],
      url: 'https://raynermelth.onsocialy.com'
    }
  ];

  protected formatIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
