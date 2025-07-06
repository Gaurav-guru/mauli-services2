import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    useMediaQuery
} from "@mui/material";
import { WhatsApp, Phone, Menu } from "@mui/icons-material";
import HomeSection from "./HomeSection";
import LabelSection from "./LabelSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";
import CallbackForm from './CallbackForm';
import FixedCallbackButton from "./FixedCallbackButton";
import Footer from "./Footer";
import logo from './company_logo.png';

const styles = {
    '@keyframes zcwmini2': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    blink: {
        borderRadius: '50%',
        backgroundColor: 'rgb(207, 8, 8)',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'zcwmini2 1.5s ease-out infinite',
    },
    tabButton: {
        fontSize: '1.3rem',
        textTransform: 'none',
        borderBottom: '2px solid transparent',
        color: 'black',
        '&:hover': {
            borderBottom: '2px solid white',
            transform: 'scale(1.1)',
        },
    },
};

const MainApp = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [callbackOpen, setCallbackOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:768px)');

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setDrawerOpen(open);
    };

    const handleCallbackOpen = () => setCallbackOpen(true);
    const handleCallbackClose = () => setCallbackOpen(false);

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button onClick={() => scrollToSection("home-section")}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection("services-section")}>
                    <ListItemText primary="Services" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection("about-section")}>
                    <ListItemText primary="About Us" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection("contact-section")}>
                    <ListItemText primary="Contact Us" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div
            style={{
                backgroundColor: '#B2AC88',
                overflowX: 'hidden',
                width: '100%',
                maxWidth: '100vw',
                paddingBottom: '100px' // Prevent bottom content from being hidden
            }}
        >
            {/* Navbar */}
            <AppBar position="static" style={{ backgroundColor: '#FFFFF0' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{
                            mr: 2,
                            display: { xs: 'block', md: 'none' },
                            color: 'black', // Fix: make menu icon black
                        }}
                    >
                        <Menu sx={{ fontSize: 30 }} />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: "bold",
                            paddingTop: '16px',
                            paddingBottom: '16px'
                        }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: '60px', objectFit: 'contain' }}
                        />
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={styles.tabButton} onClick={() => scrollToSection("home-section")}>Home</Button>
                        <Button sx={styles.tabButton} onClick={() => scrollToSection("services-section")}>Services</Button>
                        <Button sx={styles.tabButton} onClick={() => scrollToSection("about-section")}>About Us</Button>
                        <Button sx={styles.tabButton} onClick={() => scrollToSection("contact-section")}>Contact Us</Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>

            {/* Sections */}
            <HomeSection />
            <LabelSection />
            <ServicesSection />
            <AboutSection />
            <ContactUs />
            <Footer />

            {/* Floating Request Callback Button (visible on all views now) */}
            <FixedCallbackButton
                sx={{
                    position: 'fixed',
                    right: 0,
                    top: 'calc(50% - 50px)',
                    zIndex: 1000,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    padding: '4px 10px',
                    fontSize: '0.875rem',
                    minWidth: 'auto',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                }}
                handleCallbackOpen={handleCallbackOpen}
            />

            {/* WhatsApp + Call Buttons (now visible on mobile too) */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#FFFFF0",
                    color: "black",
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
                    zIndex: 1200,
                    flexWrap: 'wrap',
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <a
                        href="https://wa.me/918007113950"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <WhatsApp sx={{ mr: 1, color: "green", fontSize: 32 }} />
                        <Typography>Contact us</Typography>
                    </a>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mt: { xs: 1, md: 0 } }}>
                    <a
                        href="tel:+918007113950"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            color: "inherit",
                        }}
                    >
                        <Box sx={styles.blink}>
                            <Phone sx={{ color: "white", fontSize: 24 }} />
                        </Box>
                        <Typography sx={{ ml: 1 }}>Call Us</Typography>
                    </a>
                </Box>
            </Box>

            {/* Callback Form Dialog */}
            <CallbackForm open={callbackOpen} handleClose={handleCallbackClose} />
        </div>
    );
};

export default MainApp;
