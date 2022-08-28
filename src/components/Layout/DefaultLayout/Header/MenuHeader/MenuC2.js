import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuHeader.scss';

function MenuC2({ title, onback }) {
    return (
        <div className="menuc2_wrap" onClick={onback}>
            <FontAwesomeIcon className="menuc2_icon" icon={faChevronLeft} />
            <h3 className="menuc2_title">{title}</h3>
        </div>
    );
}

export default MenuC2;
