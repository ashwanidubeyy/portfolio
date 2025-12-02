"use client";

import { motion } from "framer-motion";
import { Typography, Row, Col, Card, Tag, Space } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const experiences = [
  {
    title: "Software Engineer",
    company: "Brainvire Infotech Pvt. Ltd.",
    location: "Ahmedabad, Gujarat, India",
    period: "Oct 2023 - Present",
    responsibilities: [
      "Improved new user-facing features in React.js/Next.js, ensuring high performance and scalability across all modern browsers and devices",
      "Designed and executed reusable, maintainable UI component libraries aligned with industry best practices",
      "Streamlined components and large-scale applications using React.memo, lazy loading, and code splitting, reducing load times by 20%",
      "Conducted deep-level debugging and analysis of edge-case scenarios in complex workflows, consistently resolving front-end bugs",
      "Cooperated with product managers, backend engineers, and QA for seamless project delivery in Agile environments",
      "Released production-ready code and thoroughly documented feature changes",
      "Conducted pull request reviews and enforced codebase quality through best practices and code standards across all modules",
      "Supported integration of RESTful APIs, optimized UIs for multiple screen sizes, and implemented key accessibility standards",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          Work Experience
        </Title>
      </motion.div>

      <Row gutter={[32, 32]} justify="center" align="stretch">
        {experiences.map((exp, index) => (
          <Col xs={24} lg={20} key={index} style={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ width: "100%" }}
            >
              <Card
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  borderLeft: "4px solid #3E78B2",
                  background: "rgba(36, 39, 43, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(74, 82, 90, 0.5)",
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                    <Title level={3} style={{ margin: 0, color: "#ffffff" }}>
                      {exp.title}
                    </Title>
                    <Title level={4} style={{ margin: 0, color: "#3E78B2" }}>
                      {exp.company}
                    </Title>
                  <Space size="middle" wrap>
                    <Text style={{ color: "#ffffff" }}>
                      <CalendarOutlined /> {exp.period}
                    </Text>
                    <Text style={{ color: "#ffffff" }}>
                      <EnvironmentOutlined /> {exp.location}
                    </Text>
                      <Tag style={{ background: "rgba(62, 120, 178, 0.3)", border: "1px solid #3E78B2", color: "#7BB3E3", fontWeight: "600" }}>Current</Tag>
                  </Space>
                    <div style={{ marginTop: "20px" }}>
                      <Title level={5} style={{ color: "#ffffff" }}>Key Responsibilities:</Title>
                      <ul style={{ paddingLeft: "20px", lineHeight: 1.8 }}>
                        {exp.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{
                              delay: index * 0.2 + respIndex * 0.08,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            style={{ marginBottom: "10px", color: "#ffffff" }}
                          >
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                </Space>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

