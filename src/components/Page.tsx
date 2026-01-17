import type React from "react";

export interface PageProps extends React.PropsWithChildren {
    className?: string;
}

export function Page({className = "", children}: PageProps) {
      return (<div className={`border-2 border-primary bg-white shadow-xl p-2 ${className}`}>{children}</div>);
}