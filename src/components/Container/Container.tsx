import React from "react";
import styles from './Container.module.scss'
import { ContainerProps } from '../../types/types'

export default function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
