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