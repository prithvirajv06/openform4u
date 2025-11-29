# OpenForm4U - Dynamic Form Builder

A modern Angular 21 web application for building and managing dynamic forms with customizable form controls and responsive design powered by Tailwind CSS.

## 🎯 Project Overview

OpenForm4U is a flexible form generation framework that allows developers to create dynamic form interfaces with minimal code. It provides a modular architecture with reusable form controls, services, and components built on Angular 21's latest standalone component features.

## 🚀 Features

- **Dynamic Form Generation**: Create forms programmatically with customizable controls
- **Reusable Form Controls**: Pre-built controllers for common input types (Textbox, Dropdown)
- **Reactive Forms**: Built on Angular's ReactiveFormsModule for robust form handling
- **Extensible Architecture**: Easy to add new form control types
- **Tailwind CSS**: Modern, responsive design system
- **TypeScript**: Full type safety with TypeScript 5.9
- **Unit Testing**: Vitest integration for comprehensive test coverage

## 📋 Tech Stack

- **Framework**: Angular 21.0.0
- **Language**: TypeScript 5.9
- **CSS Framework**: Tailwind CSS 4.1.12
- **Form Handling**: Reactive Forms
- **Testing**: Vitest 4.0.8
- **Build Tool**: Angular CLI 21.0.1
- **Package Manager**: npm

## 📁 Project Structure

```
openform4u/webapp/
├── src/
│   ├── app/
│   │   ├── form-core/
│   │   │   ├── controllers/          # Form control definitions
│   │   │   │   ├── base-controller.ts
│   │   │   │   ├── dropdown.ts
│   │   │   │   └── textbox.ts
│   │   │   ├── open-form/            # Main form component
│   │   │   │   ├── openform.component.ts
│   │   │   │   └── openform.component.html
│   │   │   └── services/             # Form data and control services
│   │   │       ├── open-form-control.service.ts
│   │   │       └── open-form-data.service.ts
│   │   ├── app.config.ts             # Angular configuration
│   │   ├── app.routes.ts             # Application routes
│   │   ├── app.ts                    # Root component
│   │   └── app.css                   # Global styles
│   ├── index.html
│   ├── main.ts                       # Application entry point
│   └── styles.css
├── public/                            # Static assets
├── angular.json                       # Angular CLI config
├── tsconfig.json                      # TypeScript config
├── package.json                       # Dependencies
└── README.md                          # This file
```

## 🔧 Installation

### Prerequisites
- Node.js (14.x or higher)
- npm (6.x or higher)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/prithvirajv06/openform4u.git
cd openform4u/webapp
```

2. Install dependencies:
```bash
npm install
```

## 📝 Available Scripts

### Development Server
Start the development server with hot reload:
```bash
npm start
```
Navigate to `http://localhost:4200/`. The application will automatically reload when you modify any source files.

### Build for Production
Compile the application for production deployment:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Watch Mode
Build the project in watch mode for development:
```bash
npm run watch
```

### Run Tests
Execute unit tests with Vitest:
```bash
npm test
```

## 🏗️ Architecture

### Form Controls
The application uses a hierarchical control structure:

- **BaseFormControl**: Abstract base class defining the interface for all form controls
- **Textbox**: Text input control (supports different types: text, email, password, etc.)
- **Dropdown**: Select/dropdown control with predefined options

### Services

#### OpenFormDataService
Provides form field metadata and configuration. Currently returns static form data but designed to fetch from remote sources.

#### OpenFormControlService
Manages form control logic and validation.

### Components

#### OpenFormComponent
The main component that renders dynamic forms using the provided control definitions and FormGroup.

## 💡 Usage Example

```typescript
import { OpenFormComponent } from './form-core/open-form/openform.component';
import { OpenFormDataService } from './form-core/services/open-form-data.service';
import { FormGroup } from '@angular/forms';

export class MyFormComponent {
  constructor(private formDataService: OpenFormDataService) {}

  formGroup = new FormGroup({});
  controls$ = this.formDataService.getFields();
}
```

## 🔄 Development Workflow

1. Create new form controls by extending `BaseFormControl`
2. Register controls in `OpenFormDataService.getFields()`
3. Use `OpenFormComponent` to render the form
4. Handle form submission through the parent component

## 🧪 Testing

The project uses Vitest for unit testing. Test files follow the naming convention `*.spec.ts`.

Run tests:
```bash
npm test
```

## 🎨 Styling

The project uses **Tailwind CSS 4.1** for styling. Configuration is handled through PostCSS.

## 📦 Dependencies

### Core Dependencies
- `@angular/core`: Core Angular framework
- `@angular/forms`: Reactive forms module
- `@angular/common`: Common utilities
- `@angular/router`: Routing module
- `@angular/platform-browser`: Browser platform
- `rxjs`: Reactive programming library

### Dev Dependencies
- `typescript`: TypeScript compiler
- `tailwindcss`: Utility-first CSS framework
- `vitest`: Unit testing framework
- `jsdom`: DOM implementation for testing

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is private. Please contact the repository owner for licensing information.

## 👤 Author

**prithvirajv06** - Repository Owner

## 🐛 Known Issues & TODOs

- [ ] Fetch form field metadata from remote source (currently hardcoded in `OpenFormDataService`)
- [ ] Add more form control types (Checkbox, Radio, Textarea, Date Picker, etc.)
- [ ] Implement form validation rules engine
- [ ] Add form submission handlers
- [ ] Implement form state persistence

## 📚 Additional Resources

- [Angular Documentation](https://angular.io)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vitest Documentation](https://vitest.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Last Updated**: November 29, 2025
