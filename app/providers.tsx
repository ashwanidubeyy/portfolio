"use client";

import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#3E78B2",
          colorSuccess: "#3E78B2",
          colorInfo: "#004BA8",
          colorBgBase: "#07070A",
          colorBgContainer: "#24272B",
          colorBgElevated: "#24272B",
          colorText: "#ffffff",
          colorTextSecondary: "#4A525A",
          colorBorder: "#4A525A",
          colorBorderSecondary: "#24272B",
          borderRadius: 8,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
        components: {
          Card: {
            colorBgContainer: "#24272B",
            colorBorderSecondary: "#4A525A",
          },
          Button: {
            colorPrimary: "#3E78B2",
            colorPrimaryHover: "#004BA8",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

