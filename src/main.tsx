import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import {ThemeProvider} from "@/contexts";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider storageKey="portfolio-ui-theme">
        <App/>
    </ThemeProvider>
);
