export interface Parameter {
    name: string;
    type: string;
    description?: string;
    [key: string]: any;
};