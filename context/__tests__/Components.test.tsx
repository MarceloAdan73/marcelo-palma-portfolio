import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AppProvider, useApp } from '@/context/AppContext';

describe('Components Rendering', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('Hero', () => {
    const HeroMock = () => {
      const { t } = useApp();
      return (
        <section id="hero">
          <h1>Marcelo Palma</h1>
          <a href="#projects">{t('hero.viewProjects')}</a>
          <a href="#contact">{t('hero.contact')}</a>
        </section>
      );
    };

    it('renders name', () => {
      render(<AppProvider><HeroMock /></AppProvider>);
      expect(screen.getByText('Marcelo Palma')).toBeInTheDocument();
    });

    it('renders view projects button', () => {
      render(<AppProvider><HeroMock /></AppProvider>);
      expect(screen.getByRole('link', { name: 'Ver proyectos' })).toBeInTheDocument();
    });

    it('renders contact button', () => {
      render(<AppProvider><HeroMock /></AppProvider>);
      expect(screen.getByRole('link', { name: 'Contactar' })).toBeInTheDocument();
    });
  });

  describe('Projects', () => {
    const ProjectsMock = () => {
      const { t } = useApp();
      return (
        <section id="projects">
          <h2>{t('projects.title')}</h2>
          <button>Todos</button>
          <button>Frontend</button>
        </section>
      );
    };

    it('renders title', () => {
      render(<AppProvider><ProjectsMock /></AppProvider>);
      expect(screen.getByRole('heading', { name: 'Proyectos' })).toBeInTheDocument();
    });

    it('renders filters', () => {
      render(<AppProvider><ProjectsMock /></AppProvider>);
      expect(screen.getByRole('button', { name: 'Todos' })).toBeInTheDocument();
    });
  });

  describe('Contact', () => {
    const ContactMock = () => {
      const { t } = useApp();
      return (
        <section id="contact">
          <h2>{t('contact.title')}</h2>
          <a href="mailto:marcelo024@gmail.com">{t('contact.email')}</a>
          <a href="tel:0291-4657839">{t('contact.phone')}</a>
        </section>
      );
    };

    it('renders contact section', () => {
      render(<AppProvider><ContactMock /></AppProvider>);
      expect(screen.getByRole('heading', { name: 'Contacto' })).toBeInTheDocument();
    });

    it('renders email link', () => {
      render(<AppProvider><ContactMock /></AppProvider>);
      expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:marcelo024@gmail.com');
    });

    it('renders phone link', () => {
      render(<AppProvider><ContactMock /></AppProvider>);
      expect(screen.getByRole('link', { name: 'Teléfono' })).toHaveAttribute('href', 'tel:0291-4657839');
    });
  });
});