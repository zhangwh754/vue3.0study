import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

export const store = createPinia().use(piniaPluginPersist)