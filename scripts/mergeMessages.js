const fs = require("fs")
const globSync = require("glob").sync
const mkdirpSync = require("mkdirp").sync
const last = require("lodash/last");

const MESSAGES_PATTERN = "./src/intl/messages/**/*.json";
const LANG_DIR = "./src/intl/locales/";
const LANG_PATTERN = "./src/intl/locales/*.json";
const BUILD_LANG = "./src/build/locales/"

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.

const defaultMessages = globSync(MESSAGES_PATTERN)
    .map(filename => ({filename, file: fs.readFileSync(filename, "utf8")}))
    .map(file => {
        file.json = JSON.parse(file.file)
        return file
    })
    .reduce((collection, descriptors) => {
        descriptors.json.forEach(({
            id,
            defaultMessage
        }) => {
            if (collection.hasOwnProperty(id)) {
                throw new Error(`Duplicate message id: ${id}`);
            }
            collection[id] = defaultMessage;
        });
        return collection;
    }, {});

fs.writeFileSync(
    `${LANG_DIR}en.json`,
    JSON.stringify(defaultMessages, null, 2)
)

// Merge translated json files (es.json, fr.json, etc) into one object
// so that they can be merged with the eggregated "en" object below

const mergedTranslations = globSync(LANG_PATTERN)
    .map(filename => {
        const locale = last(filename.split("/")).split(".json")[0];
        return {
            [locale]: JSON.parse(fs.readFileSync(filename, "utf8"))
        };
    })
    .reduce((acc, localeObj) => {
        return {
            ...acc,
            ...localeObj
        };
    }, {});

// Create a new directory that we want to write the aggregate messages to
mkdirpSync(BUILD_LANG);

// Merge aggregated default messages with the translated json files and
// write the messages to this directory
fs.writeFileSync(
    `${BUILD_LANG}data.json`,
    JSON.stringify({
        en: defaultMessages,
        ...mergedTranslations
    }, null, 2)
);