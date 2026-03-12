import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  handleRetry = () => {
    this.setState({ error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="p-3 border-2 border-gray-500 rounded">
          <p className="text-xl mb-3">{this.state.error.message}</p>
          <button
            className="bg-amber-500 rounded-md px-3 py-1 text-black cursor-pointer"
            onClick={this.handleRetry}
            type="button"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
