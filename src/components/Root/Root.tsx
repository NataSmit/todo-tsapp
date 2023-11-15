import React from "react";
import "./Root.css";
import { ContainerProps } from '../../types/types'

export default function Root({ children }: ContainerProps) {
  return <div className="root">{children}</div>;
}
