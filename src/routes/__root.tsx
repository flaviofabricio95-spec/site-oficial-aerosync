import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AeroSync Consultoria" },
      { name: "description", content: "AeroSync Consultoria — soluções premium em consultoria aeronáutica." },
      { name: "author", content: "AeroSync Consultoria" },
      { property: "og:title", content: "AeroSync Consultoria" },
      { property: "og:description", content: "AeroSync Consultoria — soluções premium em consultoria aeronáutica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Epilogue:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511959512487"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 animate-whatsapp-float"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="currentColor"
        className="h-9 w-9"
      >
        <path d="M104.2 74.3c-2.6-5.9-5.3-6-7.7-6.1-2-.1-4.3-.1-6.6-.1-2.3 0-6 1-9.2 5-3.2 4-12.2 11.9-12.2 29 0 17.1 12.5 33.6 14.2 35.9 1.8 2.3 24.1 38.7 59.6 52.7 35.5 14 35.5 9.4 41.9 8.8 6.4-.6 20.6-8.4 23.5-16.5 2.9-8.1 2.9-15.1 2-16.5-1-1.4-3.6-2.2-7.6-3.8-4-1.6-23.5-11.6-27.2-12.9-3.6-1.3-6.3-2-9 2-2.6 4-10.1 12.9-12.4 15.5-2.3 2.6-4.6 3-8.5.4-3.9-2.6-16.5-6.1-31.4-19.4-11.6-10.3-19.4-23-21.7-26.9-2.3-3.9-2.4-7.2.1-9.5 2.5-2.3 5.5-5.8 8.2-8.7 2.7-2.9 3.6-5 5.4-8.3 1.8-3.3.9-6.2-.5-8.7-1.4-2.5-6.2-15.6-8.7-21.4z" />
      </svg>
    </a>
  );
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
