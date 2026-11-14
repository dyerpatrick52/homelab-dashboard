export interface Healthcheck {
    status : Status,
    uptimeSeconds : number
}
export type Status = "healthy" | "degraded" | "unhealthy"
