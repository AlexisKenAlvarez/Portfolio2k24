import { forwardRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/app/utils/cn";

interface myProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

// eslint-disable-next-line react/display-name
const Container = forwardRef<HTMLDivElement, myProps>(
  ({ className, children, id }, ref) => {
    return (
      <section
        className={cn("relative h-auto w-full px-5", className)}
        ref={ref}
        id={id}
      >
        {children}
      </section>
    );
  },
);

export default Container;