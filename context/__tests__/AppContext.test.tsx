import { render, screen, fireEvent, act } from '@testing-library/react';
import { AppProvider, useApp } from '../AppContext';

// Componente de prueba para consumir el contexto
const TestComponent = () => {
  const { language, theme, toggleLanguage, toggleTheme, t } = useApp();
  return (
    <div>
      <div data-testid="language">{language}</div>
      <div data-testid="theme">{theme}</div>
      <div data-testid="translation">{t('nav.home')}</div>
      <button onClick={toggleLanguage} data-testid="toggle-lang">Toggle Lang</button>
      <button onClick={toggleTheme} data-testid="toggle-theme">Toggle Theme</button>
    </div>
  );
};

describe('AppContext', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
    // Mock de localStorage
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();
  });

  it('debe proporcionar valores por defecto (es, light)', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(screen.getByTestId('language')).toHaveTextContent('es');
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('translation')).toHaveTextContent('Inicio');
  });

  it('debe cambiar el idioma al llamar toggleLanguage', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    fireEvent.click(screen.getByTestId('toggle-lang'));
    
    expect(screen.getByTestId('language')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('Home');
    expect(localStorage.setItem).toHaveBeenCalledWith('language', 'en');
  });

  it('debe cambiar el tema al llamar toggleTheme', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    fireEvent.click(screen.getByTestId('toggle-theme'));
    
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('debe cargar valores guardados en localStorage', () => {
    // Mock de localStorage con valores guardados
    (localStorage.getItem as jest.Mock).mockImplementation((key) => {
      if (key === 'language') return 'en';
      if (key === 'theme') return 'dark';
      return null;
    });

    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(screen.getByTestId('language')).toHaveTextContent('en');
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('debe lanzar error si useApp se usa fuera de AppProvider', () => {
    // Silenciar error de consola para este test
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useApp must be used within an AppProvider');
    
    consoleError.mockRestore();
  });
});