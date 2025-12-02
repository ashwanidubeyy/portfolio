"use client";

import { motion } from "framer-motion";
import { Typography, Row, Col, Tag, Card } from "antd";
import {
  CodeOutlined,
  ToolOutlined,
  ApiOutlined,
  BugOutlined,
  LockOutlined,
  UserOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiFigma,
  SiFirebase,
  SiSocketdotio,
  SiVisualstudiocode,
  SiAdobexd,
  SiNpm,
  SiYarn,
  SiPostman,
} from "react-icons/si";

const { Title } = Typography;

const skillCategories = [
  {
    title: "Technologies",
    icon: <CodeOutlined />,
    color: "#3E78B2",
    skills: [
      { name: "React.js", icon: <SiReact />, iconColor: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, iconColor: "#ffffff" },
      { name: "TypeScript", icon: <SiTypescript />, iconColor: "#3178C6" },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, iconColor: "#F7DF1E" },
      { name: "Context API", icon: <ApiOutlined />, iconColor: "#61DAFB" },
      { name: "Redux Toolkit", icon: <SiRedux />, iconColor: "#764ABC" },
    ],
  },
  {
    title: "Tools",
    icon: <ToolOutlined />,
    color: "#004BA8",
    skills: [
      { name: "VS Code", icon: <SiVisualstudiocode />, iconColor: "#007ACC" },
      { name: "Cursor (Vibe code)", icon: <CodeOutlined />, iconColor: "#ffffff" },
      { name: "Figma", icon: <SiFigma />, iconColor: "#F24E1E" },
      { name: "Adobe XD", icon: <SiAdobexd />, iconColor: "#FF61F6" },
    ],
  },
  {
    title: "Integration",
    icon: <ApiOutlined />,
    color: "#3E78B2",
    skills: [
      { name: "Next.js Auth", icon: <LockOutlined />, iconColor: "#ffffff" },
      { name: "Socket.io", icon: <SiSocketdotio />, iconColor: "#010101" },
      { name: "Social Login Integration", icon: <UserOutlined />, iconColor: "#DB4437" },
      { name: "Firebase", icon: <SiFirebase />, iconColor: "#FFCA28" },
      { name: "REST API Integration", icon: <ApiOutlined />, iconColor: "#10B981" },
    ],
  },
  {
    title: "Development & Debugging",
    icon: <BugOutlined />,
    color: "#004BA8",
    skills: [
      { name: "npm & yarn", icon: <SiNpm />, iconColor: "#CB3837" },
      { name: "Bug Resolution & Debugging", icon: <BugOutlined />, iconColor: "#FF4D4F" },
      { name: "Performance Optimization", icon: <ThunderboltOutlined />, iconColor: "#52C41A" },
      { name: "Postman", icon: <SiPostman />, iconColor: "#FF6C37" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills & Technologies
        </Title>
      </motion.div>

      <Row gutter={[32, 32]} justify="center">
        {skillCategories.map((category, categoryIndex) => (
          <Col xs={24} sm={12} lg={6} key={categoryIndex}>
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                delay: categoryIndex * 0.15,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card
                style={{
                  height: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  borderTop: `4px solid ${category.color}`,
                  background: "rgba(36, 39, 43, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid rgba(74, 82, 90, 0.5)`,
                  transition: "all 0.3s ease",
                }}
                hoverable
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      color: category.color,
                      marginRight: "10px",
                    }}
                  >
                    {category.icon}
                  </span>
                  <Title level={4} style={{ margin: 0 }}>
                    {category.title}
                  </Title>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: false, margin: "-30px" }}
                      transition={{
                        delay:
                          categoryIndex * 0.15 + skillIndex * 0.06,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.15, y: -2 }}
                    >
                      <Tag
                        style={{
                          padding: "8px 16px",
                          fontSize: "14px",
                          borderRadius: "20px",
                          marginBottom: "8px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          background: "rgba(62, 120, 178, 0.3)",
                          border: "1px solid #3E78B2",
                          color: "#7BB3E3",
                          fontWeight: "600",
                        }}
                      >
                        {skill.icon && (
                          <span
                            style={{
                              fontSize: "16px",
                              color: (skill as any).iconColor || "#3E78B2",
                            }}
                          >
                            {skill.icon}
                          </span>
                        )}
                        {skill.name}
                      </Tag>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

