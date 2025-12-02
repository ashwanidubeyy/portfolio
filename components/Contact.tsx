"use client";

import { motion } from "framer-motion";
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Space,
  Form,
  Input,
  message,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  SendOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { FaLinkedin } from "react-icons/fa";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const contactInfo = [
  {
    icon: <MailOutlined />,
    title: "Email",
    value: "ashwanidubey00001@gmail.com",
    link: "mailto:ashwanidubey00001@gmail.com",
    color: "#EA4335", // Gmail red
    borderColor: "#3E78B2",
  },
  {
    icon: <PhoneOutlined />,
    title: "Phone",
    value: "+91 8319641894",
    link: "tel:+918319641894",
    color: "#34A853", // Phone green
    borderColor: "#3E78B2",
  },
  {
    icon: <LinkedinOutlined />,
    title: "LinkedIn",
    value: "Ashwani Kumar Dubey",
    link: "https://www.linkedin.com/in/ashwani-kumar-dubey",
    color: "#0077B5", // LinkedIn blue
    borderColor: "#3E78B2",
  },
];

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    message.success("Thank you for your message! I will get back to you soon.");
    form.resetFields();
  };

  return (
    <section
      id="contact"
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
            marginBottom: "20px",
            fontSize: "clamp(32px, 5vw, 48px)",
          }}
        >
          Get In Touch
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#ffffff",
            marginBottom: "60px",
          }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </Paragraph>
      </motion.div>

      <Row gutter={[32, 32]} justify="center" align="stretch">
        <Col xs={24} lg={12} style={{ display: "flex" }}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
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
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Title
                level={3}
                style={{ marginBottom: "30px", color: "#ffffff" }}
              >
                Contact Information
              </Title>
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      style={{ textDecoration: "none", display: "block" }}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        delay: index * 0.15,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        x: 12,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    >
                      <Card
                        hoverable
                        style={{
                          border: `2px solid ${info.borderColor || info.color}`,
                          borderRadius: "16px",
                          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                          background: "rgba(36, 39, 43, 0.9)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Space size="large">
                          <div
                            style={{
                              fontSize: "32px",
                              color: info.color,
                            }}
                          >
                            {info.icon}
                          </div>
                          <div>
                            <Title
                              level={5}
                              style={{
                                margin: 0,
                                marginBottom: "4px",
                                color: "#ffffff",
                              }}
                            >
                              {info.title}
                            </Title>
                            <Paragraph
                              style={{
                                margin: 0,
                                color: "#ffffff",
                                fontSize: "16px",
                              }}
                            >
                              {info.value}
                            </Paragraph>
                          </div>
                        </Space>
                      </Card>
                    </motion.a>
                  ))}
                </Space>
              </div>
            </Card>
          </motion.div>
        </Col>

        <Col xs={24} lg={12} style={{ display: "flex" }}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
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
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Title
                level={3}
                style={{ marginBottom: "30px", color: "#ffffff" }}
              >
                Send a Message
              </Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="subject"
                  rules={[
                    { required: true, message: "Please enter a subject!" },
                  ]}
                >
                  <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message!" },
                  ]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Your Message"
                    style={{ resize: "none" }}
                  />
                </Form.Item>
                <Form.Item style={{ marginTop: "auto", marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SendOutlined />}
                    block
                    style={{
                      height: "50px",
                      fontSize: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
}
