"use client";

import { motion } from "framer-motion";
import { Typography, Row, Col, Card, Tag, Space } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiChartdotjs,
  SiSocketdotio,
} from "react-icons/si";
import { ApiOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "Edulac & Edulac Admin",
    period: "Jan 2025 - Present",
    description:
      "Developed a scalable, multi-role administrative dashboard using Next.js and Material UI, creating a unified platform for automating student admission workflows and fee management.",
    highlights: [
      "Enforced advanced component architectures and role-based access control (RBAC), automating student admissions and administrative tasks",
      "Enhanced frontend performance by 25% through the strategic implementation of React.memo, lazy loading, and route-based code splitting, ensuring smooth interactions on low-bandwidth networks",
      "Improved mobile engagement by 25% and reduced page load times by 20% through code-splitting, lazy loading, and web performance tools",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Material UI", icon: null },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "RBAC", icon: null },
    ],
    color: "#3E78B2",
  },
  {
    title: "Stact",
    period: "Oct 2024 - Jan 2025",
    description:
      "Architected an AI-powered risk management platform using Next.js 15, React 18, and TypeScript, designed to analyze complex construction contracts and identify critical liabilities.",
    highlights: [
      "Designed a secure, granular Role-Based Access Control (RBAC) to ensure strict data isolation",
      "Developed interactive analytics dashboards using Chart.js to visualize risk matrices and location analytics",
      "Built a reusable component library with 20+ custom components using Ant Design",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React 18", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Ant Design", icon: null },
    ],
    color: "#004BA8",
  },
  {
    title: "Trends Web App",
    period: "May 2024 - Oct 2024",
    description:
      "Built a high-concurrency social commerce platform featuring shoppable videos and live chat integration using Socket.io.",
    highlights: [
      "Reduced latency for real-time user interactions by implementing optimized event listeners and state updates, ensuring a seamless live-shopping experience",
      "Collaborated with backend engineers to integrate REST APIs for social login and payment gateway processing",
      "Incorporated social login features",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "React", icon: SiReact },
      { name: "REST API", icon: ApiOutlined },
      { name: "Social Login", icon: UserOutlined },
      { name: "Ant Design", icon: null },
    ],
    color: "#3E78B2",
  },
  {
    title: "Connex Inventory",
    period: "Dec 2023 - Mar 2024",
    description:
      'Engineered a real-time inventory tracking system, integrating distinct "Demo Account" functionality to drive user acquisition.',
    highlights: [
      "Refactored legacy React components to modern functional components with Hooks, improving code maintainability and readability",
      "Collaborated with product and design teams to ensure scalable integration of REST APIs",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "REST API", icon: ApiOutlined },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Material UI", icon: null },
    ],
    color: "#004BA8",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background:
          "linear-gradient(180deg, #24272B 0%, #07070A 50%, #24272B 100%)",
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
          Featured Projects
        </Title>
      </motion.div>

      <Row gutter={[32, 32]} justify="center" align="stretch">
        {projects.map((project, index) => (
          <Col xs={24} sm={12} lg={12} key={index} style={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{ width: "100%" }}
            >
              <Card
                style={{
                  height: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  borderTop: `4px solid ${project.color}`,
                  background: "rgba(36, 39, 43, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(74, 82, 90, 0.5)",
                  transition: "all 0.3s ease",
                }}
                hoverable
              >
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  <div>
                    <Title
                      level={4}
                      style={{
                        margin: 0,
                        marginBottom: "8px",
                        color: "#ffffff",
                      }}
                    >
                      {project.title}
                    </Title>
                    <Tag
                      style={{
                        background: "rgba(62, 120, 178, 0.3)",
                        border: "1px solid #3E78B2",
                        color: "#7BB3E3",
                        fontWeight: "600",
                      }}
                      icon={<RocketOutlined />}
                    >
                      {project.period}
                    </Tag>
                  </div>

                  <Paragraph
                    style={{
                      color: "#ffffff",
                      lineHeight: 1.8,
                      minHeight: "60px",
                    }}
                  >
                    {project.description}
                  </Paragraph>

                  <div>
                    <Title
                      level={5}
                      style={{ marginBottom: "12px", color: "#ffffff" }}
                    >
                      Key Highlights:
                    </Title>
                    <ul style={{ paddingLeft: "20px", lineHeight: 1.8 }}>
                      {project.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, margin: "-30px" }}
                          transition={{
                            delay: index * 0.2 + hIndex * 0.1,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          style={{
                            marginBottom: "8px",
                            fontSize: "14px",
                            color: "#ffffff",
                          }}
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Title
                      level={5}
                      style={{ marginBottom: "12px", color: "#ffffff" }}
                    >
                      Technologies:
                    </Title>
                    <Space wrap size={[8, 8]}>
                      {project.technologies.map((tech, techIndex) => {
                        const techName =
                          typeof tech === "string" ? tech : tech.name;
                        const IconComponent =
                          typeof tech === "object" ? tech.icon : null;
                        return (
                          <Tag
                            key={techIndex}
                            style={{
                              background: "rgba(62, 120, 178, 0.3)",
                              border: "1px solid #3E78B2",
                              color: "#7BB3E3",
                              fontWeight: "600",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            {IconComponent && (
                              <span
                                style={{
                                  fontSize: "14px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <IconComponent />
                              </span>
                            )}
                            {techName}
                          </Tag>
                        );
                      })}
                    </Space>
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
