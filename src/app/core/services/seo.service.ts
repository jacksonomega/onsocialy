import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { SEO_CONFIG } from '../seo.config';

export interface SeoData {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    canonicalUrl?: string;
    type?: string;
    publishedDate?: string;
    modifiedDate?: string;
    author?: string;
    section?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private readonly meta = inject(Meta);
    private readonly title = inject(Title);
    private readonly document = inject(DOCUMENT);
    private readonly router = inject(Router);

    constructor() { }

    public setSeoData(data: SeoData): void {
        this.updateTitle(data.title);
        this.updateMetaTags(data);
        this.updateOpenGraphTags(data);
        this.updateTwitterCard(data);
        this.setCanonicalUrl(data.canonicalUrl || data.url);
        // JSON-LD is handled separately or we can add a method here if needed
    }

    public updateTitle(title?: string): void {
        const newTitle = title
            ? SEO_CONFIG.titleTemplate.replace('%s', title)
            : SEO_CONFIG.defaultTitle;
        this.title.setTitle(newTitle);
    }

    public updateMetaTags(data: SeoData): void {
        this.meta.updateTag({ name: 'description', content: data.description || SEO_CONFIG.defaultDescription });

        const keywords = data.keywords ? data.keywords.join(', ') : SEO_CONFIG.defaultKeywords.join(', ');
        this.meta.updateTag({ name: 'keywords', content: keywords });

        this.meta.updateTag({ name: 'author', content: data.author || 'OnSocialy' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.meta.updateTag({ name: 'theme-color', content: '#0a0a0f' });
    }

    public updateOpenGraphTags(data: SeoData): void {
        const path = data.url || this.router.url;
        const fullUrl = this.buildUrl(path);
        
        const navTitle = data.title || SEO_CONFIG.defaultTitle;
        const description = data.description || SEO_CONFIG.defaultDescription;
        const image = data.image || SEO_CONFIG.defaultImage;

        this.meta.updateTag({ property: 'og:url', content: fullUrl });
        this.meta.updateTag({ property: 'og:type', content: data.type || SEO_CONFIG.type });
        this.meta.updateTag({ property: 'og:title', content: navTitle });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:image', content: image });
        this.meta.updateTag({ property: 'og:site_name', content: 'OnSocialy' });
        this.meta.updateTag({ property: 'og:locale', content: SEO_CONFIG.locale });
    }

    public updateTwitterCard(data: SeoData): void {
        let navTitle = data.title || SEO_CONFIG.defaultTitle;
        // Truncate for twitter if necessary or just replace
        if (data.title) {
            navTitle = SEO_CONFIG.titleTemplate.replace('%s', data.title);
        }
        
        const description = data.description || SEO_CONFIG.defaultDescription;
        const image = data.image || SEO_CONFIG.defaultImage;

        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:site', content: SEO_CONFIG.social.twitter });
        this.meta.updateTag({ name: 'twitter:creator', content: SEO_CONFIG.social.twitter });
        this.meta.updateTag({ name: 'twitter:title', content: navTitle });
        this.meta.updateTag({ name: 'twitter:description', content: description });
        this.meta.updateTag({ name: 'twitter:image', content: image });
    }

    public setCanonicalUrl(url?: string): void {
        const link: HTMLLinkElement = this.document.querySelector('link[rel="canonical"]')
            || this.document.createElement('link');

        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
        }

        const path = url || this.router.url;
        const fullUrl = this.buildUrl(path);
        link.setAttribute('href', fullUrl);
    }

    private buildUrl(path: string): string {
        if (path.startsWith('http')) return path;
        
        // Try to use true canonical host from document if possible, otherwise fallback to SEO_CONFIG
        let base = SEO_CONFIG.baseUrl;
        try {
            if (this.document.location && this.document.location.origin && this.document.location.origin !== 'null') {
                base = this.document.location.origin;
            }
        } catch(e) {}
        
        return `${base}${path.startsWith('/') ? path : '/' + path}`;
    }

    public setJsonLd(data: any): void {
        let script = this.document.querySelector('script[type="application/ld+json"]');
        if (!script) {
            script = this.document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            this.document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);
    }
}
