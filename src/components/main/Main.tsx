import { ReactNode } from "react"
import styles from './mainModule.css'

interface MainProps {
    children?: ReactNode
    page:string
}

export const Main = ({children, page}:MainProps) => {
    const {children} = props
    
    return <main>
        {children}
    </main>
}