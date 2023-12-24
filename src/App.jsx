import './App.css';
import Header from './composants/header/Header';
import Naviguation from './composants/naviguation/Naviguation';

function App() {
    return (
        <>
            <div className='contener'>
                <Naviguation />
                <Header />
            </div>
        </>
    );
}

export default App;
