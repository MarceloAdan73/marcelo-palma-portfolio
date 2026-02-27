import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AppProvider } from '@/context/AppContext';
import Header from '../Header';
import Footer from '../Footer';

expect.extend(toHaveNoViolations);

// Mock MEJORADO de framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  
  // Componente que filtra props de animación
  const createMotionComponent = (type: string) => {
    const Component = ({ children, ...props }: any) => {
      // Filtramos todas las props de animación
      const safeProps = { ...props };
      const motionProps = [
        'whileHover', 'whileTap', 'whileInView', 'whileFocus',
        'layoutId', 'animate', 'initial', 'exit', 'transition',
        'variants', 'onHoverStart', 'onHoverEnd', 'onTap',
        'drag', 'dragConstraints', 'dragElastic', 'dragMomentum'
      ];
      
      motionProps.forEach(prop => delete safeProps[prop]);
      
      return React.createElement(type, safeProps, children);
    };
    Component.displayName = `Motion${type}`;
    return Component;
  };

  return {
    ...actual,
    motion: {
      div: createMotionComponent('div'),
      header: createMotionComponent('header'),
      button: createMotionComponent('button'),
      span: createMotionComponent('span'),
      nav: createMotionComponent('nav'),
      a: createMotionComponent('a'),
    },
    useScroll: () => ({ scrollYProgress: 0.5 }),
    useMotionValueEvent: () => {},
    useTransform: () => 0,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Accessibility Tests', () => {
  it('Header no debe tener violaciones de accesibilidad', async () => {
    const { container } = render(
      <AppProvider>
        <Header />
      </AppProvider>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Footer no debe tener violaciones de accesibilidad', async () => {
    const { container } = render(
      <AppProvider>
        <Footer />
      </AppProvider>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});