import { Component, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    console.error("Error Boundary caught an error:", error, errorInfo);

    // In production, you could send this to an error tracking service like Sentry
    if (process.env.NODE_ENV === "production") {
      // Example: Sentry.captureException(error);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-foreground">
                Something went wrong
              </h1>
              <p className="text-muted-foreground">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mt-4 p-4 bg-destructive/5 rounded-lg text-left">
                <p className="text-sm font-mono text-destructive break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex gap-3 justify-center">
              <Button onClick={this.handleReset} variant="default">
                Go to Homepage
              </Button>
              <Button onClick={() => window.location.reload()} variant="outline">
                Refresh Page
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              If this problem persists, please contact us at{" "}
              <a
                href="mailto:walkersfencingcontractors@mail.com"
                className="text-primary hover:underline"
              >
                walkersfencingcontractors@mail.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
