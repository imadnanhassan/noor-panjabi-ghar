import { useState, useRef } from "react";
import Loading from "../components/common/Loading";
import Alert from "../components/common/Alert";

export function useLoadingAlert() {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [alert, setAlert] = useState<{
    message: string;
    type?: "success" | "error" | "info";
  }>({ message: "", type: undefined });

  const showAlert = (message: string, type: "success" | "error" | "info") => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAlert({ message, type });
    timeoutRef.current = setTimeout(() => {
      setAlert({ message: "", type: undefined });
      timeoutRef.current = null;
    }, 3000);
  };

  const closeAlert = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setAlert({ message: "", type: undefined });
  };

  const loadingComponent = loading ? <Loading /> : null;
  const alertComponent = alert.message ? (
    <Alert message={alert.message} type={alert.type} onClose={closeAlert} />
  ) : null;

  return {
    loading,
    setLoading,
    alert,
    setAlert,
    showAlert,
    closeAlert,
    loadingComponent,
    alertComponent,
  };
}
