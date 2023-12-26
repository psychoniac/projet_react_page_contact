import './App.css';
import Formulaire from './composants/formulaire/Formulaire';
import Header from './composants/header/Header';
import Naviguation from './composants/naviguation/Naviguation';

function App() {
    return (
        <>
            <div className='contener'>
                <Naviguation />
                <Header />
                <Formulaire />
            </div>
        </>
    );
}

export default App;
