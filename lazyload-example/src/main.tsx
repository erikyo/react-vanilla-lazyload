import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LazyWrapper from "../../src/Wrapper.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <LazyWrapper>
        <App/>
    </LazyWrapper>
)
