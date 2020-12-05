import React from "react";

interface Props {
  children: any;
  title: string;
}

export default function Section({ children, title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}
