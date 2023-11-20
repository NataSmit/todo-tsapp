import React from "react"
import styles from "./Root.module.scss"
import { ContainerProps } from '../../types/types'

export default function Root ({ children }: ContainerProps) {
    return <div className={styles.root}>{children}</div>
}
