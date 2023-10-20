/* eslint-disable jsx-a11y/alt-text */
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import image from '../../../asset/image/body.jpg';

const cx = classNames.bind(styles);
function About() {
    return (
        <div>
            <p className={cx('para')}>
                Chào mừng các bạn đã đến với page phim hot mỗi ngày
            </p>
            <img src={image} className={cx('img')}></img>
        </div>
    );
}

export default About;