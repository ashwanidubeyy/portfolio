"use client";

import { Layout, Typography } from "antd";
import { motion } from "framer-motion";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter
      style={{
        textAlign: "center",
        background: "#07070A",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <Text style={{ color: "rgba(255, 255, 255, 0.65)" }}>
          © {currentYear} All rights reserved.
        </Text>
      </motion.div>
    </AntFooter>
  );
}

