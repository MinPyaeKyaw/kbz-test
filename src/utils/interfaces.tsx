import { ReactNode } from "react";

export interface BtnInterface {
    title: string;
    action: () => void;
    icon?: ReactNode;
}