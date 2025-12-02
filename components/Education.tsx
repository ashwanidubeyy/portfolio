"use client";

import { motion } from "framer-motion";
import { Typography, Row, Col, Card } from "antd";
import { BookOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Hamidia Arts and Commerce College",
    location: "Bhopal, Madhya Pradesh",
    period: "2019-2023",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Vikram Higher Secondary School",
    location: "Bhopal, Madhya Pradesh",
    period: "2018-2019",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        background: "linear-gradient(180deg, #07070A 0%, #24272B 50%, #07070A 100%)",
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
          Education
        </Title>
      </motion.div>

      <Row gutter={[32, 32]} justify="center">
        {education.map((edu, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.3 } }}
            >
              <Card
                style={{
                  height: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  textAlign: "center",
                  background: "rgba(36, 39, 43, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(74, 82, 90, 0.5)",
                }}
                hoverable
              >
                <div
                style={{
                  fontSize: "48px",
                  color: "#3E78B2",
                  marginBottom: "20px",
                }}
                >
                  <BookOutlined />
                </div>
                <Title level={4} style={{ marginBottom: "12px", color: "#ffffff" }}>
                  {edu.degree}
                </Title>
                <Text
                  strong
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#3E78B2",
                  }}
                >
                  {edu.institution}
                </Text>
                <Text style={{ display: "block", marginBottom: "8px", color: "#ffffff" }}>
                  {edu.location}
                </Text>
                <Text style={{ color: "#ffffff" }}>
                  <CalendarOutlined /> {edu.period}
                </Text>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

