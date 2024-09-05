import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1360px] px-5 mx-auto">{children}</div>;
}
