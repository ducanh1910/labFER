import classnames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import { useState } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const cn = classnames.bind(styles);

function MainLayout({ children }) {
    const currentLocation = useLocation();

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const StyledSwitch = styled(Switch)(({ theme }) => ({
        // ... (I won't change the styling part as it's quite complex and specific)
    }));
    
    const lightStyles = {
        container: { backgroundColor: '#AED9E0' },
        content: { backgroundColor: '#4a4e50' },
        appbar: { backgroundColor: '#aecce0' },
    };

    const darkStyles = {
        container: { backgroundColor: '#263238' },
        content: { backgroundColor: '#0f1416' },
    };

    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <div className={cn('layout-container')} style={styles.container}>
            <AppBar position="static" className={cn('layout-appbar')} style={styles.appbar}>
                <Tabs className={cn('layout-tabs')}>
                    {['/', '/detail', '/about', '/news', '/contact'].map((path, index) => {
                        const labels = ['Index', 'Detail', 'About', 'News', 'Contact'];
                        return (
                            <Tab
                                className={cn('layout-tab', currentLocation.pathname === path ? 'active' : '')}
                                label={labels[index]}
                                component={Link}
                                to={path}
                                key={path}
                            />
                        );
                    })}
                </Tabs>
            </AppBar>
            <div className={cn('layout-content')} style={styles.content}>
                <FormGroup>
                    <FormControlLabel
                        control={<StyledSwitch sx={{ m: 1 }} checked={isDarkTheme} />}
                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                    />
                </FormGroup>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
