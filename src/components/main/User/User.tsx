import { Route, Routes } from 'react-router-dom';
import UserSidebar from './UserSidebar/UserSidebar';
import './User.scss';
import './UserAdaptive.scss';
import UserHeader from './UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';
import {
    DiagnosticIcon,
    DiagnosticResultsIcon,
    FileShareIcon,
    HomeIcon,
    InstitutionListIcon,
    MaterialsIcon,
    OrganizerIcon,
    ProceduresIcon,
    ProceduresResultsIcon,
    QAIcon,
} from '../../../assets';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { useEffect, useState } from 'react';
import { ISidebarListItem } from '../../../interfaces';
import UserContent from './static/UserContent';

const User = () => {
    useEffect(() => {
        switch (localStorage.getItem('sidebarStatus')) {
            case 'true':
                setIsOpen(true);
                break;
            case 'false':
                setIsOpen(false);
                break;
            default:
                break;
        }
    }, []);

    const loggedSidebarListData: ISidebarListItem[] = [
        {
            path: 'home',
            text: 'Главная',
            icon: <HomeIcon />,
        },
        {
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <OrganizerIcon />,
        },
        {
            path: 'constructor',
            text: 'Оценочные процедуры (мониторинги)',
            icon: <ProceduresIcon />,
        },
        {
            path: 'reports',
            text: 'Результаты оценочных процедур (мониторингов)',
            icon: <ProceduresResultsIcon />,
        },
        {
            path: 'diagnostic',
            text: 'Профессиональная диагностика',
            icon: <DiagnosticIcon />,
        },
        {
            path: 'diagnostic-results',
            text: 'Результаты профессиональной диагностики',
            icon: <DiagnosticResultsIcon />,
        },
        {
            path: 'handbook',
            text: 'Методические материалы (рекомендации, сборники, памятки)',
            icon: <MaterialsIcon />,
        },
        {
            path: 'files',
            text: 'Файлообменник',
            icon: <FileShareIcon />,
        },
        {
            path: 'communications',
            text: 'Вопрос/Ответ',
            icon: <QAIcon />,
        },
        {
            path: 'listEI',
            text: 'Список образовательных учреждений',
            icon: <InstitutionListIcon />,
        },
    ];

    const notLoggedSidebarListData: ISidebarListItem[] = [
        {
            path: 'home',
            text: 'Главная',
            icon: <HomeIcon />,
        },
        {
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <OrganizerIcon />,
        },
        {
            path: 'listEI',
            text: 'Список образовательных учреждений',
            icon: <InstitutionListIcon />,
        },
    ];

    const { isLogged } = useTypeSelector(state => state.userStatus);

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        localStorage.setItem('sidebarStatus', JSON.stringify(isOpen));
    }, [isOpen]);

    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? 'user' : 'user user_collapsed'}>
            <UserSidebar
                handleCollapse={handleCollapse}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                sidebarListData={
                    isLogged ? loggedSidebarListData : notLoggedSidebarListData
                }
            />
            <UserHeader />
            <div className='user-content'>
                <Outlet />
                <Routes>
                  <Route
                    element={(
                      <>
                        {/* <UserContent /> */}
                        <Outlet />
                      </>
                    )}
                  >
                    <Route path="/" element={<Outlet />} />
                    <Route path="/handbook" element={<UserContent />} />
                  </Route>
                </Routes>
            </div>
        </div>
    );
};

export default User;
