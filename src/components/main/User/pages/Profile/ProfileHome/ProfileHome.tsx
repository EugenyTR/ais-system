import './ProfileHome.scss';
import ProfileUserData from './ProfileUserData/ProfileUserData';
import ProfileInfoHeader from './ProfileInfoHeader/ProfileInfoHeader';

const ProfileHome = () => {
    return (
        <div className='user-profile-info'>
            <ProfileInfoHeader />
            <ProfileUserData />
            <div className='user-profile-info-privileges'>
                <p className='bold-title'>Выполняемые функции:</p>
                <p className='regular-subtitle'>Генеральный директор (Администратор)</p>
            </div>
        </div>
    );
};

export default ProfileHome;
