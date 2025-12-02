"use client";

import { useEffect, useState } from "react";
import { Layout, FloatButton, theme } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const { Content } = Layout;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { token } = theme.useToken();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: token.colorBgBase,
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Navigation />
      <Content
        style={{
          width: "100%",
          overflowX: "hidden",
          paddingTop: 80, // offset for fixed header height
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </Content>
      <Footer />
      <FloatButton
        icon={<ArrowUpOutlined />}
        type="primary"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1200,
        }}
      />
    </Layout>
  );
}

