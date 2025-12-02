"use client";

import { useState, useEffect } from "react";
import { Layout, Menu, theme } from "antd";
import { motion } from "framer-motion";

const { Header } = Layout;

const navItems = [
  { key: "home", label: "Home", href: "#home" },
  { key: "about", label: "About", href: "#about" },
  { key: "skills", label: "Skills", href: "#skills" },
  { key: "experience", label: "Experience", href: "#experience" },
  { key: "projects", label: "Projects", href: "#projects" },
  { key: "education", label: "Education", href: "#education" },
  { key: "languages", label: "Languages", href: "#languages" },
  { key: "contact", label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { token } = theme.useToken();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].href.substring(1);
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].key);
          break;
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.startsWith("#") ? href.substring(1) : href;
    const section = document.getElementById(id);

    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setActiveSection(id);
  };

  return (
    <>
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1100,
          background: scrolled
            ? token.colorBgContainer
            : "rgba(7, 7, 10, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: scrolled ? token.boxShadow : "none",
          transition: "all 0.3s ease",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: "0 24px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#3E78B2",
                textDecoration: "none",
              }}
            >
              AKD
            </a>
          </motion.div>

          <Menu
            mode="horizontal"
            selectedKeys={[activeSection]}
            style={{
              border: "none",
              background: "transparent",
              display: "flex",
              minWidth: 0,
              flex: 1,
              justifyContent: "flex-end",
            }}
            items={navItems.map((item) => ({
              key: item.key,
              label: (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  style={{
                    color: activeSection === item.key ? "#3E78B2" : "inherit",
                    fontWeight: activeSection === item.key ? "600" : "normal",
                  }}
                >
                  {item.label}
                </a>
              ),
            }))}
          />
        </div>
      </Header>
    </>
  );
}

