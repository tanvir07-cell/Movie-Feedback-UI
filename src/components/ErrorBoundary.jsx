import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h2 className="bg-jacaranda-300 text-center text-xl p-2">
                    {this.props.msg || "There was an error."}
                </h2>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary