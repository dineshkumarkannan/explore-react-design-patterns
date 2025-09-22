## Container-Presenter

### Container Component

Manages the component's state, data fetching (e.g., API calls), and any business logic.

### Presenter Component

Solely concerned with how the UI looks and receives data and callbacks as props from its parent (usually a Container component).

Typically a functional component, often stateless, and primarily focused on rendering the UI based on the props it receives. It should not contain any business logic or data-fetching concerns.

#### Benefits

1. Separation of Concerns
2. Improved Reusability
3. Simplified Testing
4. Enhanced Maintainability
