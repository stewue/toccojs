import entities from './entities'
import fetch from './util/fetch'

const app = {
    initialized: false
}

const initialize = config => {
    app.config = config
    app.basePath = config.host + '/nice2/rest'
    app.fetch = fetch(app)
    app.initialized = true
}

const setCredentials = credentials => {
    app.credentials = credentials
}

const setBusinessUnit = businessUnit => {
    app.businessUnit = businessUnit
}

export default {
    initialize,
    setCredentials,
    setBusinessUnit,
    entities: () => {
        if (app.initialized) {
            return entities(app)
        }
        throw 'App not initialized (call tocco.initialize(config))'
    }
}
