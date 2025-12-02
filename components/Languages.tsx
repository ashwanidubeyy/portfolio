"use client";

import { motion } from "framer-motion";
import { Typography, Row, Col, Tag } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Title } = Typography;

const languages = [
  { name: "English", proficiency: "Fluent" },
  { name: "Hindi", proficiency: "Native" },
];

export default function Languages() {
  return (
    <section
      id="languages"
      style={{
        background: "linear-gradient(180deg, #24272B 0%, #07070A 50%, #24272B 100%)",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "60px",
            fontSize: "clamp(32px, 5vw, 48px)",
          }}
        >
          Languages
        </Title>
      </motion.div>

      <Row gutter={[32, 32]} justify="center">
        {languages.map((language, index) => (
          <Col xs={12} sm={8} lg={6} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.15, y: -10, transition: { duration: 0.3 } }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "48px",
                  color: "#3E78B2",
                  marginBottom: "16px",
                }}
              >
                <GlobalOutlined />
              </div>
              <Title level={4} style={{ marginBottom: "8px", color: "#ffffff" }}>
                {language.name}
              </Title>
              <Tag style={{ fontSize: "14px", padding: "4px 12px", background: "rgba(62, 120, 178, 0.3)", border: "1px solid #3E78B2", color: "#7BB3E3", fontWeight: "600" }}>
                {language.proficiency}
              </Tag>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

