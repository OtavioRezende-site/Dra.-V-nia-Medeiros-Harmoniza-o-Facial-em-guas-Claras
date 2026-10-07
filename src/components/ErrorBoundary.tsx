import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.href = window.location.pathname.split("#")[0] || "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#faf8f5] text-[#2d241e] px-6 py-12">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#e0d8ce] shadow-xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f7f2ea] border border-[#b89660]/30 flex items-center justify-center">
              <span className="font-serif-editorial text-2xl text-[#b89660] font-normal">VM</span>
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block">
                Dra. Vânia Medeiros
              </span>
              <h1 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
                Carregando a página
              </h1>
              <p className="text-sm text-[#6b5d50] leading-relaxed">
                Ocorreu uma pequena instabilidade ao carregar os recursos. Clique no botão abaixo para reiniciar o site.
              </p>
            </div>
            <button
              onClick={this.handleReload}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
