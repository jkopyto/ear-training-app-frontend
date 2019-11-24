const DASHBOARD_ROUTE = "/dashboard"

export const RouteBuilder = {
    toDashboard: () => DASHBOARD_ROUTE,
    toIntervals: () => `${DASHBOARD_ROUTE}/intervals`,
    toVoiceNote: () => `${DASHBOARD_ROUTE}/voiceNote`,
    toOffNote: () => `${DASHBOARD_ROUTE}/off-note`,
    toEnharmonics: () => `${DASHBOARD_ROUTE}/enharmonics`
}