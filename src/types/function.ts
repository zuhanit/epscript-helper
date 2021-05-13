import { Parameter } from "./parameters";

export interface Function {
    name: string;
    description?: string;
    params: Parameter[];
    results?: string;
}