import "./TopBar.css"
import { useSelector } from 'react-redux';

const TopBar = () => {
    const showToldCards = useSelector((state) => state.toldCards);
    return <div className={'told-title__controls'}>
        <h1>
            TOLD Card Calculator
        </h1>
        <h2>
            Told Cards Shown: {showToldCards}
        </h2>
    </div>
}

export default TopBar