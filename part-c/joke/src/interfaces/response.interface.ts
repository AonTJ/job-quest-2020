export enum ResponseType {
    Success = 1,
    Failed = 0,
}

export interface JsonResponse {
    type: ResponseType
    value: any
}
