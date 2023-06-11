import '../styles/global.css';
import dynamic from "next/dynamic";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navStyle from '@/styles/navigation.module.css'
import styles from '@/styles/layout.module.css';
import { NextAuthProvider } from '@/components/NextAuthProvider';
import Layout from '@/components/layout';
const Navigation = dynamic(
  () => {
    return import('../components/Navigation');
  },
  {ssr: false,
  loading: () => <FontAwesomeIcon icon={faBars} className={navStyle.navButton}/>}
);
export const metadata = {
    title: 'The Force\'s Den',
    description: 'The Force\'s personal website. Currently under development',
  }

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }) {
    config.autoAddCss = false
    return (
      <html lang="en">
        <body>
          <NextAuthProvider>
            <Navigation></Navigation>
            <Layout>{children}</Layout>
            <footer className={styles.footer}><p>Logo copyright ©Nihon Falcom Corperation</p></footer>
          </NextAuthProvider>
        </body>
      </html>
    )
  }