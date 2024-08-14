export const doLogout = (storeConfig: any) => {
  window.location.assign(`${storeConfig.secureSubdomain}/api/vtexid/pub/logout?scope=${storeConfig.api.storeId}&returnUrl=${storeConfig.storeUrl}`)
}