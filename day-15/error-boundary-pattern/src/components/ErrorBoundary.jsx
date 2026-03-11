import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, retryKey: 0 };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        }
    }

    componentDidCatch(error, info) {
        console.error("Error :", error.message);
        console.error("Component stack:", info.componentStack);
    }

    handleRetry = () => {
        this.setState((prev) => ({
            hasError: false,
            error: null,
            retryKey: prev.retryKey + 1
        }))
    }

    render() {
        const { hasError, error, retryKey } = this.state;
        const { fallback: FallBack, children } = this.props;
        if (hasError) {
            return <FallBack error={error} onRetry={this.handleRetry} />;
        }
        return <div key={retryKey} >{children}</div>
    }
}

export default ErrorBoundary;