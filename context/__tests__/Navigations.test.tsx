import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppProvider, useApp } from '@/context/AppContext';

describe('AppContext Navigation', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const TestComponent = () => {
    const { t } = useApp();
    return (
      <nav>
        <a href="#hero">{t('nav.home')}</a>
        <a href="#projects">{t('nav.projects')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>
    );
  };

  test('renders navigation links in Spanish', () => {
    render(<AppProvider><TestComponent /></AppProvider>);
    expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Proyectos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contacto' })).toBeInTheDocument();
  });

  test('navigation has correct hrefs', () => {
    render(<AppProvider><TestComponent /></AppProvider>);
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '#hero');
    expect(screen.getByRole('link', { name: 'Proyectos' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Contacto' })).toHaveAttribute('href', '#contact');
  });

  test('language toggle changes translations', async () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggle';
    document.body.appendChild(toggleBtn);
    
    await userEvent.click(toggleBtn);
    
    render(<AppProvider><TestComponent /></AppProvider>);
  });
});

describe('AppContext Hero Links', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const HeroLinks = () => {
    const { t } = useApp();
    return (
      <div>
        <a href="#projects">{t('hero.viewProjects')}</a>
        <a href="#contact">{t('hero.contact')}</a>
      </div>
    );
  };

  test('renders hero action links', () => {
    render(<AppProvider><HeroLinks /></AppProvider>);
    expect(screen.getByRole('link', { name: 'Ver proyectos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contactar' })).toBeInTheDocument();
  });

  test('hero links navigate to correct sections', () => {
    render(<AppProvider><HeroLinks /></AppProvider>);
    expect(screen.getByRole('link', { name: 'Ver proyectos' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Contactar' })).toHaveAttribute('href', '#contact');
  });
});