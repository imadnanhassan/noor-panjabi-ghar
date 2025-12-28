"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  Save,
  X,
} from "lucide-react";

export default function SecuritySettingsPage() {
  const [passwordPolicy, setPasswordPolicy] = useState({
    minLength: "8",
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: false,
    passwordExpiry: "90",
  });

  const [loginSecurity, setLoginSecurity] = useState({
    maxLoginAttempts: "5",
    lockoutDuration: "30",
    sessionTimeout: "60",
    requireTwoFactor: false,
    rememberMeDuration: "7",
  });

  const [apiSecurity, setApiSecurity] = useState({
    rateLimitRequests: "100",
    rateLimitWindow: "60",
    apiKeyExpiry: "365",
    ipWhitelist: "",
    corsOrigins: "*",
  });

  const [auditSettings, setAuditSettings] = useState({
    enableAuditLog: true,
    logRetentionDays: "365",
    logSensitiveActions: true,
    emailAuditReports: false,
  });

  const handlePasswordChange = (field: string, value: string | boolean) => {
    setPasswordPolicy((prev) => ({ ...prev, [field]: value }));
  };

  const handleLoginChange = (field: string, value: string | boolean) => {
    setLoginSecurity((prev) => ({ ...prev, [field]: value }));
  };

  const handleApiChange = (field: string, value: string) => {
    setApiSecurity((prev) => ({ ...prev, [field]: value }));
  };

  const handleAuditChange = (field: string, value: string | boolean) => {
    setAuditSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving security settings:", {
      passwordPolicy,
      loginSecurity,
      apiSecurity,
      auditSettings,
    });
    alert("Security settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button className="flex items-center gap-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors mb-4">
              <ArrowLeft size={16} />
              Back to Settings
            </button>
            <motion.h1
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Security Settings
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Configure password policies, authentication, and security measures
            </motion.p>
          </motion.div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-8"
        >
          {/* PASSWORD POLICY */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Lock size={18} />
              Password Policy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Minimum Password Length *
                </label>
                <input
                  type="number"
                  min="6"
                  max="32"
                  value={passwordPolicy.minLength}
                  onChange={(e) =>
                    handlePasswordChange("minLength", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Password Expiry (days) *
                </label>
                <input
                  type="number"
                  min="30"
                  value={passwordPolicy.passwordExpiry}
                  onChange={(e) =>
                    handlePasswordChange("passwordExpiry", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Require Uppercase Letters
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={passwordPolicy.requireUppercase}
                    onChange={(e) =>
                      handlePasswordChange("requireUppercase", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Require Lowercase Letters
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={passwordPolicy.requireLowercase}
                    onChange={(e) =>
                      handlePasswordChange("requireLowercase", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Require Numbers</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={passwordPolicy.requireNumbers}
                    onChange={(e) =>
                      handlePasswordChange("requireNumbers", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Require Special Characters
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={passwordPolicy.requireSpecialChars}
                    onChange={(e) =>
                      handlePasswordChange(
                        "requireSpecialChars",
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* LOGIN SECURITY */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Shield size={18} />
              Login Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Max Login Attempts *
                </label>
                <input
                  type="number"
                  min="3"
                  max="10"
                  value={loginSecurity.maxLoginAttempts}
                  onChange={(e) =>
                    handleLoginChange("maxLoginAttempts", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Lockout Duration (minutes) *
                </label>
                <input
                  type="number"
                  min="5"
                  value={loginSecurity.lockoutDuration}
                  onChange={(e) =>
                    handleLoginChange("lockoutDuration", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Session Timeout (minutes) *
                </label>
                <input
                  type="number"
                  min="15"
                  value={loginSecurity.sessionTimeout}
                  onChange={(e) =>
                    handleLoginChange("sessionTimeout", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Remember Me Duration (days) *
                </label>
                <input
                  type="number"
                  min="1"
                  value={loginSecurity.rememberMeDuration}
                  onChange={(e) =>
                    handleLoginChange("rememberMeDuration", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Require Two-Factor Authentication
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={loginSecurity.requireTwoFactor}
                    onChange={(e) =>
                      handleLoginChange("requireTwoFactor", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* API SECURITY */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Key size={18} />
              API Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Rate Limit (requests/minute) *
                </label>
                <input
                  type="number"
                  min="10"
                  value={apiSecurity.rateLimitRequests}
                  onChange={(e) =>
                    handleApiChange("rateLimitRequests", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Rate Limit Window (minutes) *
                </label>
                <input
                  type="number"
                  min="1"
                  value={apiSecurity.rateLimitWindow}
                  onChange={(e) =>
                    handleApiChange("rateLimitWindow", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  API Key Expiry (days) *
                </label>
                <input
                  type="number"
                  min="30"
                  value={apiSecurity.apiKeyExpiry}
                  onChange={(e) =>
                    handleApiChange("apiKeyExpiry", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  CORS Origins *
                </label>
                <input
                  type="text"
                  value={apiSecurity.corsOrigins}
                  onChange={(e) =>
                    handleApiChange("corsOrigins", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="https://example.com, *"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-(--admin-text-muted) text-sm mb-2">
                IP Whitelist (comma-separated)
              </label>
              <textarea
                value={apiSecurity.ipWhitelist}
                onChange={(e) => handleApiChange("ipWhitelist", e.target.value)}
                rows={2}
                className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                placeholder="192.168.1.1, 10.0.0.1"
              />
            </div>
          </motion.div>

          {/* AUDIT LOGGING */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Shield size={18} />
              Audit Logging
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Log Retention (days) *
                </label>
                <input
                  type="number"
                  min="30"
                  value={auditSettings.logRetentionDays}
                  onChange={(e) =>
                    handleAuditChange("logRetentionDays", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Enable Audit Logging</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={auditSettings.enableAuditLog}
                    onChange={(e) =>
                      handleAuditChange("enableAuditLog", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Log Sensitive Actions
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={auditSettings.logSensitiveActions}
                    onChange={(e) =>
                      handleAuditChange("logSensitiveActions", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Email Audit Reports</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={auditSettings.emailAuditReports}
                    onChange={(e) =>
                      handleAuditChange("emailAuditReports", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* SUBMIT BUTTONS */}
          <motion.div
            className="flex items-center justify-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              type="button"
              className="flex items-center gap-2 bg-(--admin-bg-light) border-(--admin-border) text-(--admin-text-muted) px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-bg-hover) transition-colors"
            >
              <X size={18} />
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-(--admin-gold) text-black px-8 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
            >
              <Save size={18} />
              Save Changes
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
