import Footer from "../footer";
import Header from "../header";
import styles from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    const { children } = props
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}> {children} </div>
            <Footer />
        </div>
    )
}
