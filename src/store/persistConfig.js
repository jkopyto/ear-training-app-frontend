import persistStorage from "redux-persist/lib/storage"

export default {
    key: "root",
    storage: persistStorage,
    whitelist: []
}
