import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { AppProvider } from '@/context/AppContext';
import About from '@/components/About';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

describe('Accessibility (jest-axe)', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('About (método + ingeniería + evolución) no tiene violaciones de a11y', async () => {
    const { container } = render(
      <AppProvider>
        <About />
      </AppProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Header no tiene violaciones de a11y', async () => {
    const { container } = render(
      <AppProvider>
        <Header />
      </AppProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Projects (mini case studies) no tiene violaciones de a11y', async () => {
    const projects = [
      {
        title: 'Test Project',
        slug: 'test-project',
        description: 'Descripción',
        problem: 'Un problema real',
        result: 'Un resultado medible',
        icon: 'FaCode',
        techStack: ['Next.js', 'TypeScript'],
        featured: true,
        showcase: false,
        category: 'fullstack',
      },
    ] as never;
    const { container } = render(
      <AppProvider>
        <Projects projects={projects as never} />
      </AppProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});