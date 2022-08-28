import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('Wraper')}>
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('wraper-infor')}>
                <div className={cx('infor')}>
                    <h4 className={cx('name')}>{data.full_name} </h4>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faCheckCircle}
                        />
                    )}
                </div>
                <span className={cx('username')}>{data.nickname} </span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
