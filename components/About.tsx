"use client";

import { motion } from "framer-motion";
import { Typography, Card, Row, Col, Statistic } from "antd";
import {
  UserOutlined,
  RocketOutlined,
  BugOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const stats = [
  {
    title: "Experience",
    value: "2+ Years",
    prefix: <RocketOutlined />,
    color: "#3E78B2",
  },
  {
    title: "Bug Resolution",
    value: "95%",
    prefix: <BugOutlined />,
    color: "#3E78B2",
  },
  {
    title: "User Impact",
    value: "90%",
    prefix: <UserOutlined />,
    color: "#004BA8",
  },
  {
    title: "Performance",
    value: "20%",
    suffix: " Faster",
    prefix: <ThunderboltOutlined />,
    color: "#004BA8",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background:
          "linear-gradient(180deg, #07070A 0%, #24272B 50%, #07070A 100%)",
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
          About Me
        </Title>
      </motion.div>

      <Row gutter={[32, 32]} justify="center" align="stretch">
        <Col xs={24} lg={12} style={{ display: "flex" }}>
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ width: "100%" }}
          >
            <Card
              style={{
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                background: "rgba(36, 39, 43, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(74, 82, 90, 0.5)",
              }}
            >
              <Title
                level={3}
                style={{ marginBottom: "20px", color: "#ffffff" }}
              >
                Professional Summary
              </Title>
              <Paragraph
                style={{ fontSize: "16px", lineHeight: 1.8, color: "#ffffff" }}
              >
                Results-driven Software Engineer with 2+ years of proven
                experience architecting and developing high-performance,
                scalable web applications using React.js, Next.js, and
                TypeScript. Specialized in building responsive user interfaces,
                optimizing application performance, and implementing debugging
                solutions that achieve{" "}
                <strong style={{ color: "#3E78B2" }}>
                  95% bug resolution rate
                </strong>
                . Demonstrated track record of impacting{" "}
                <strong style={{ color: "#3E78B2" }}>90% user base</strong>{" "}
                across multiple projects while reducing load times by{" "}
                <strong style={{ color: "#3E78B2" }}>20%</strong>.
              </Paragraph>
              <Paragraph
                style={{ fontSize: "16px", lineHeight: 1.8, color: "#ffffff" }}
              >
                I approach design through grids, flows, and moments of delight,
                creating experiences that are simple, human, and thoughtfully
                crafted. My work reflects a balance of clarity, usability, and
                thoughtful visual storytelling, rooted in strong product
                thinking.
              </Paragraph>
            </Card>
          </motion.div>
        </Col>

        <Col xs={24} lg={12} style={{ display: "flex" }}>
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ width: "100%" }}
          >
            <Card
              style={{
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                background: "rgba(36, 39, 43, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(74, 82, 90, 0.5)",
              }}
            >
              <Title
                level={3}
                style={{ marginBottom: "30px", color: "#ffffff" }}
              >
                Key Achievements
              </Title>
              <Row gutter={[16, 24]} justify="center" align="stretch">
                {stats.map((stat, index) => (
                  <Col xs={24} sm={12} key={index} style={{ display: "flex" }}>
                    <motion.div
                      initial={{ opacity: 0, y: 80, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, margin: "-80px" }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{ width: "100%" }}
                    >
                      <Card
                        style={{
                          height: "100%",
                          textAlign: "center",
                          border: `2px solid ${stat.color}`,
                          borderRadius: "16px",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                          background: "rgba(36, 39, 43, 0.9)",
                        }}
                      >
                        <Statistic
                          title={stat.title}
                          value={stat.value}
                          prefix={
                            <span
                              style={{ color: stat.color, fontSize: "24px" }}
                            >
                              {stat.prefix}
                            </span>
                          }
                          suffix={stat.suffix}
                          valueStyle={{ color: stat.color, fontWeight: "bold" }}
                          // titleStyle={{ color: "#ffffff" }}
                        />
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
}
