import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'privacidad',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'terminos',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cookies',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
