// types/next.d.ts
import "next";

declare module "next" {
  export interface PageProps {
    params?: Record<string, string>;
    // Add any other properties you need
  }
}
