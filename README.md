# TestLab — QA Automation Dashboard

A modern, interactive demonstration of automated testing practices using **Next.js**, **Jest**, and **React Testing Library**. Built as a professional academic project showcasing unit testing, component testing, state management testing, and network mocking.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Tests](https://img.shields.io/badge/tests-12%2F12%20passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-82%25-blue)
![Node](https://img.shields.io/badge/node-v18%2B-blue)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Testing](#testing)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)

---

## Overview

**TestLab** is a practical demonstration of how to test React/Next.js applications properly. Instead of just explaining testing theory, it provides a **working, interactive application** where you can:

1. **See testable components** rendered in real-time
2. **Interact with demos** (Counter, Contact Form)
3. **Test API integration** with mocked network calls
4. **View test coverage** metrics
5. **Run the full test suite** with Jest

This project is perfect for:
- Students learning QA automation
- Developers building testable React apps
- Portfolios demonstrating testing expertise
- Educational projects on automated testing

---

## Features

### Testing Demonstrations
- Unit Testing: Individual component validation (Button, Card, Input)
- Component Testing: Widget interactions and state changes
- State Testing: Form validation and counter logic
- Network Mocking: Simulated API calls without internet dependency
- Integration Testing: Multiple components working together

### Interactive Components
- Counter: Increment, decrement, and reset functionality
- Contact Form: Input validation with real-time error messages
- User Data Component: API integration demo with loading/error states
- Reusable UI Components: Button, Card, Input with accessible patterns

### Code Quality
- 82%+ Code Coverage: Comprehensive test suite
- TypeScript Support: Type-safe development
- Claymorphism Design: Modern, attractive UI
- Accessibility: Semantic HTML and ARIA attributes
- Responsive: Works on desktop and mobile

---

## Technologies

| Category | Technologies |
|----------|---------------|
| **Framework** | Next.js 16.3, React 19 |
| **Language** | TypeScript 5 |
| **Styling** | CSS Modules with Claymorphism Design |
| **Testing** | Jest, React Testing Library |
| **Package Manager** | npm |

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn available

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashashv2005-code/sprint11.pd.git
   cd sprint11.pd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Homepage: [http://localhost:3000](http://localhost:3000)
   - API Testing: [http://localhost:3000/api-testing](http://localhost:3000/api-testing)

---

## Project Structure

```
sprint11.pd/
├── app/                           # Next.js App Router
│   ├── page.tsx                  # Homepage
│   ├── page.module.css           # Homepage styles
│   ├── globals.css               # Global styles & claymorphism theme
│   ├── layout.tsx                # Root layout
│   ├── api/
│   │   └── users/
│   │       └── route.ts          # Mock API endpoint
│   └── api-testing/
│       └── page.tsx              # API testing demo page
│
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── Button.tsx            # Button component
│   │   ├── Card.tsx              # Card component
│   │   ├── Input.tsx             # Input field component
│   │   ├── Counter.tsx           # Counter demo component
│   │   ├── ContactForm.tsx       # Contact form with validation
│   │   ├── UserData.tsx          # API integration component
│   │   └── testlab.module.css    # Component styles
│   │
│   └── __tests__/                # Test files
│       ├── Button.test.tsx       # Button component tests
│       ├── Card.test.tsx         # Card component tests
│       ├── Input.test.tsx        # Input component tests
│       ├── Counter.test.tsx      # Counter state tests
│       ├── ContactForm.test.tsx  # Form validation tests
│       └── UserData.test.tsx     # API mocking tests
│
├── jest.config.ts                # Jest configuration
├── jest.setup.ts                 # Jest setup file
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies
└── README.md                      # This file
```

---

## Components

### Button
Reusable button component with multiple variants.

**Props:**
- `variant`: `'primary'` | `'secondary'` (default: primary)
- `children`: React.ReactNode
- `onClick`: event handler
- `disabled`: boolean

**Example:**
```tsx
<Button onClick={handleClick}>Click Me</Button>
<Button variant="secondary" disabled>Disabled</Button>
```

### Card
Display information in a visually appealing container.

**Props:**
- `title`: string
- `description`: string
- `icon`: string (optional)
- `action`: React.ReactNode (optional)

**Example:**
```tsx
<Card 
  title="Unit Testing" 
  description="Test components in isolation"
/>
```

### Input
Form input with validation support.

**Props:**
- `label`: string
- `value`: string
- `onChange`: (value: string) => void
- `error`: string (optional)
- `placeholder`: string (optional)
- `required`: boolean (optional)

**Example:**
```tsx
<Input 
  label="Email"
  value={email}
  onChange={setEmail}
  error={emailError}
  type="email"
/>
```

### Counter
Interactive counter with increment/decrement/reset.

**State:** Starts at 0, can go negative

**Example:**
```tsx
<Counter />
```

### ContactForm
Form with validation and success message.

**Validations:**
- Name required
- Email required and valid format
- Message required

**Example:**
```tsx
<ContactForm />
```

### UserData
Component that fetches and displays user data from API.

**States:**
- Loading: "Loading users..."
- Success: Displays user list
- Error: "Unable to load users."

**Example:**
```tsx
<UserData />
```

---

## Testing

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test:watch
```
Or:
```bash
npm test -- --watch
```

### Generate Coverage Report
```bash
npm test:coverage
```
Or:
```bash
npm test -- --coverage
```

### Test Results
- Test Suites: 6 passed
- Tests: 12 passed
- Coverage: 82%+ overall

### Test Files

| File | Tests | Purpose |
|------|-------|---------|
| `Button.test.tsx` | 2 | Render, click handler, disabled state |
| `Card.test.tsx` | 1 | Render with props |
| `Input.test.tsx` | 2 | User typing, error messages |
| `Counter.test.tsx` | 1 | Increment, decrement, reset |
| `ContactForm.test.tsx` | 3 | Validation, success, error states |
| `UserData.test.tsx` | 3 | Loading, success, error (mocked fetch) |

### Key Testing Patterns

**Unit Testing:**
```typescript
it('renders button with text', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
```

**User Interaction Testing:**
```typescript
it('increments counter on button click', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  await user.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

**Network Mocking:**
```typescript
it('displays users on successful fetch', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: 'John', email: 'john@example.com' }],
  });
  
  render(<UserData />);
  await waitFor(() => expect(screen.getByText('John')).toBeInTheDocument());
});
```

---

## Available Scripts

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Testing
npm test             # Run all tests
npm test:watch      # Run tests in watch mode
npm test:coverage   # Generate coverage report

# Linting
npm run lint         # Run ESLint
```

---

## Design System

### Claymorphism Theme

The project uses a modern **claymorphism** design featuring:
- Color Palette: Soft purples (#8b5cf6, #a78bfa) on light backgrounds
- Glassmorphism: Frosted glass effects with backdrop filters
- Shadows: Layered, soft shadows for depth
- Gradients: Smooth color transitions
- Rounded Corners: Organic 2.5rem border-radius
- Animations: Smooth 0.3-0.4s transitions

---

## API Endpoints

### GET /api/users
Returns a list of mock users.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

---

## Pages

### Homepage (/)
- Hero section with call-to-actions
- Testing focus areas showcase
- Interactive demos (Counter, Contact Form)
- Project overview and statistics

### API Testing (/api-testing)
- UserData component demonstration
- Loading state visualization
- Success and error state handling
- Explanation of network mocking in tests

---

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically:
   - Install dependencies
   - Build the project
   - Deploy to a live URL

**Environment Variables:** None required for this project

### Manual Deployment

```bash
npm run build
npm start
```

---

## Learn More

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

### Testing Resources
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Best Practices](https://testing-library.com/docs/queries/about)

### React Resources
- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react/hooks)

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

## About

**TestLab** was created as a demonstration of professional QA automation practices for modern React applications. It showcases real-world testing patterns and best practices used in production applications.

**Repository:** [github.com/yashashv2005-code/sprint11.pd](https://github.com/yashashv2005-code/sprint11.pd)

---

## Tips

- Want to learn testing? Start with the `Counter.test.tsx` file—it's the simplest example
- Need to understand mocking? Check out `UserData.test.tsx`
- Want to extend? Add new components in `src/components/` and tests in `src/__tests__/`
- Having issues? Make sure Node.js 18+ is installed: `node --version`

---

Made with dedication as an academic QA automation project

[Visit Homepage](http://localhost:3000) | [View on GitHub](https://github.com/yashashv2005-code/sprint11.pd)


