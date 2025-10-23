import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import { Layout } from './components/layout/Layout.tsx';
import About from "./pages/About";
import Activities from "./pages/Activities";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
})

// Create layout route
const layoutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: Layout,
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  component: Index,
})

const aboutRoute = createTanStackRoute({
  getParentRoute: () => layoutRoute,
  path: '/about',
  component: About,
})

const activitiesRoute = createTanStackRoute({
  getParentRoute: () => layoutRoute,
  path: '/activities',
  component: Activities,
})

const bookingRoute = createTanStackRoute({
  getParentRoute: () => layoutRoute,
  path: '/booking',
  component: Booking,
})

const galleryRoute = createTanStackRoute({
  getParentRoute: () => layoutRoute,
  path: '/gallery',
  component: Gallery,
})

const testimonialsRoute = createTanStackRoute({
  getParentRoute: () => layoutRoute,
  path: '/testimonials',
  component: Testimonials,
})

const contactRoute = createTanStackRoute({
  getParentRoute: () => layoutRoute,
  path: '/contact',
  component: Contact,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    indexRoute,
    aboutRoute,
    activitiesRoute,
    bookingRoute,
    galleryRoute,
    testimonialsRoute,
    contactRoute,
  ]),
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;