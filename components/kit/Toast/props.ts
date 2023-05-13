type ToastTypes = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id?: string;
  close?: boolean;
  title?: string;
  message: string;
  type: ToastTypes;
}
