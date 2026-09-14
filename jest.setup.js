import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Mock de next/router
jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
    push: jest.fn(),
  }),
}));

// Mock de next/link
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock de framer-motion: el proxy crea cualquier tag (motion.div, motion.circle, motion.h2, ...)
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: new Proxy(
      {},
      {
        get: (_target, prop) => {
          if (typeof prop !== 'string') return undefined;
          return React.forwardRef((props, ref) =>
            React.createElement(prop, { ref, ...props })
          );
        },
      }
    ),
    useScroll: () => ({
      scrollYProgress: { value: 0, on: jest.fn() },
    }),
    useTransform: () => ({}),
    useMotionValueEvent: jest.fn(),
    useInView: jest.fn(() => false),
    AnimatePresence: ({ children }) => children,
    MotionConfig: ({ children }) => children,
    createRef: () => ({}),
  };
});

// Mock de react-icons (mismo comportamiento que react-icons real: <svg aria-hidden="true">)
// Usa un Proxy: cualquier ícono pedido se resuelve a un mock (evita listar cada export).
const mockIcons = () =>
  new Proxy(
    {},
    {
      get: (_target, prop) => {
        if (typeof prop !== 'string') return undefined;
        return (props) =>
          require('react').createElement('svg', {
            'aria-hidden': 'true',
            'data-icon': prop,
            ...props,
          });
      },
    }
  );

jest.mock('react-icons/fa', () => mockIcons());
jest.mock('react-icons/si', () => mockIcons());
jest.mock('react-icons/md', () => mockIcons());
jest.mock('react-icons/tb', () => mockIcons());
jest.mock('react-icons/vsc', () => mockIcons());
jest.mock('react-icons/hi', () => mockIcons());
jest.mock('react-icons/bs', () => mockIcons());

// Mock de next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

// Mock de IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
};