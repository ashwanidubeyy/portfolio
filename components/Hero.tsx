"use client";

import { motion } from "framer-motion";
import { Button, Space, Typography } from "antd";
import { DownloadOutlined, MailOutlined, PhoneOutlined, FilePdfOutlined } from "@ant-design/icons";
import { FaLinkedin } from "react-icons/fa";

const { Title, Paragraph } = Typography;

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #07070A 0%, #24272B 50%, #004BA8 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
        width: "100%",
        maxWidth: "100%",
        margin: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(62, 120, 178, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 75, 168, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(36, 39, 43, 0.2) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "white",
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <motion.div variants={itemVariants}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              margin: "0 auto 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: "bold",
              border: "3px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            AKD
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Title
            level={1}
            style={{
              color: "white",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Ashwani Kumar Dubey
          </Title>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Title
            level={2}
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 400,
              marginBottom: "30px",
            }}
          >
            Software Engineer
          </Title>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paragraph
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "clamp(16px, 2vw, 20px)",
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            Results-driven Software Engineer with 2+ years of experience
            architecting and developing high-performance, scalable web
            applications using React.js, Next.js, and TypeScript.
          </Paragraph>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Space size="large" wrap style={{ justifyContent: "center", marginBottom: "40px" }}>
            <Button
              type="primary"
              size="large"
              icon={<FilePdfOutlined />}
              href="/resumeashwani.pdf"
              download="Ashwani_Kumar_Dubey_Resume.pdf"
              style={{
                height: "50px",
                padding: "0 30px",
                fontSize: "16px",
                borderRadius: "25px",
              }}
            >
              Download Resume
            </Button>
            <Button
              size="large"
              icon={<MailOutlined />}
              href="mailto:ashwanidubey00001@gmail.com"
              style={{
                height: "50px",
                padding: "0 30px",
                fontSize: "16px",
                borderRadius: "25px",
                background: "rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                color: "white",
              }}
            >
              Get In Touch
            </Button>
          </Space>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Space size="large" style={{ justifyContent: "center" }}>
            <motion.a
              href="https://www.linkedin.com/in/ashwani-kumar-dubey"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                fontSize: "32px",
                color: "#0077B5",
                textDecoration: "none",
              }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="tel:+918319641894"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                fontSize: "32px",
                color: "#34A853",
                textDecoration: "none",
              }}
            >
              <PhoneOutlined />
            </motion.a>
          </Space>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "24px",
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

