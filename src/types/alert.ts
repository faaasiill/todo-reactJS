export interface AlertState {
  type: "success" | "error";
  message: string;
  visible: boolean;
}
