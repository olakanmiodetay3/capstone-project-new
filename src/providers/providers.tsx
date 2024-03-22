import React from "react";
import { UserProvider } from "./user";

type ProvidersProps = { children: React.ReactNode };

export const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <UserProvider>{children}</UserProvider>
);
