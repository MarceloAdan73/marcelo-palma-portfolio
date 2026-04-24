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

// Mock de framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
      span: React.forwardRef((props, ref) => <span ref={ref} {...props} />),
      a: React.forwardRef((props, ref) => <a ref={ref} {...props} />),
      button: React.forwardRef((props, ref) => <button ref={ref} {...props} />),
      header: React.forwardRef((props, ref) => <header ref={ref} {...props} />),
      nav: React.forwardRef((props, ref) => <nav ref={ref} {...props} />),
      section: React.forwardRef((props, ref) => <section ref={ref} {...props} />),
    },
    useScroll: () => ({
      scrollYProgress: { value: 0, on: jest.fn() },
    }),
    useTransform: () => ({}),
    useMotionValueEvent: jest.fn(),
    useInView: jest.fn(() => false),
    AnimatePresence: ({ children }) => children,
    createRef: () => ({}),
  };
});

// Mock de react-icons
jest.mock('react-icons/fa', () => {
  const React = require('react');
  const mockIcon = (name) => (props) => React.createElement('span', { 'aria-label': name, ...props });
  return {
    FaGithub: mockIcon('FaGithub'),
    FaLinkedin: mockIcon('FaLinkedin'),
    FaEnvelope: mockIcon('FaEnvelope'),
    FaPhone: mockIcon('FaPhone'),
    FaMapMarkerAlt: mockIcon('FaMapMarkerAlt'),
    FaCode: mockIcon('FaCode'),
    FaBars: mockIcon('FaBars'),
    FaTimes: mockIcon('FaTimes'),
    FaReact: mockIcon('FaReact'),
    FaNodeJs: mockIcon('FaNodeJs'),
    FaDocker: mockIcon('FaDocker'),
    FaArrowDown: mockIcon('FaArrowDown'),
    FaExternalLinkAlt: mockIcon('FaExternalLinkAlt'),
    FaPython: mockIcon('FaPython'),
    FaAngular: mockIcon('FaAngular'),
    FaVuejs: mockIcon('FaVuejs'),
    FaServer: mockIcon('FaServer'),
    FaLayerGroup: mockIcon('FaLayerGroup'),
    FaCrown: mockIcon('FaCrown'),
    FaLock: mockIcon('FaLock'),
    FaRobot: mockIcon('FaRobot'),
    FaWhatsapp: mockIcon('FaWhatsapp'),
  };
});

jest.mock('react-icons/si', () => {
  const React = require('react');
  const mockIcon = (name) => (props) => React.createElement('span', { 'aria-label': name, ...props });
  return {
    SiNextdotjs: mockIcon('SiNextdotjs'),
    SiTypescript: mockIcon('SiTypescript'),
    SiTailwindcss: mockIcon('SiTailwindcss'),
    SiElectron: mockIcon('SiElectron'),
    SiFastapi: mockIcon('SiFastapi'),
    SiDjango: mockIcon('SiDjango'),
    SiJsonwebtokens: mockIcon('SiJsonwebtokens'),
    SiGooglegemini: mockIcon('SiGooglegemini'),
    SiExpress: mockIcon('SiExpress'),
    SiPostgresql: mockIcon('SiPostgresql'),
    SiPrisma: mockIcon('SiPrisma'),
    SiJest: mockIcon('SiJest'),
  };
});

jest.mock('react-icons/md', () => {
  const React = require('react');
  return {
    MdTranslate: (props) => React.createElement('span', { 'aria-label': 'translate', ...props }),
  };
});

jest.mock('react-icons/tb', () => {
  const React = require('react');
  return {
    TbTestPipe: (props) => React.createElement('span', { 'aria-label': 'test-pipe', ...props }),
  };
});

jest.mock('react-icons/si', () => ({
  SiNextdotjs: 'SiNextdotjs',
  SiTypescript: 'SiTypescript',
  SiTailwindcss: 'SiTailwindcss',
  SiElectron: 'SiElectron',
  SiFastapi: 'SiFastapi',
  SiDjango: 'SiDjango',
  SiJsonwebtokens: 'SiJsonwebtokens',
  SiGooglegemini: 'SiGooglegemini',
  SiExpress: 'SiExpress',
  SiPostgresql: 'SiPostgresql',
  SiPrisma: 'SiPrisma',
  SiJest: 'SiJest',
}));

jest.mock('react-icons/md', () => ({
  MdTranslate: 'MdTranslate',
}));

jest.mock('react-icons/tb', () => ({
  TbTestPipe: 'TbTestPipe',
}));

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