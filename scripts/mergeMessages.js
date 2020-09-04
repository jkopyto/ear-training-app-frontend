const fs = require("fs")
const globSync = require("glob").sync
const mkdirpSync = require("mkdirp").sync

const MESSAGES_PATTERN = "./src/intl/messages/**/*.json"
const BUILD_DIR = "./src/__build/locales/"
const LOCALE_DIR = "./src/intl/locales/"

// Try to delete current json files from public/locales
/*try {
  fs.unlinkSync("./public/messages/data.json");
} catch (error) {
  console.log(error);
}*/

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(MESSAGES_PATTERN)
  .map(fileName => {
    return { fileName, file: fs.readFileSync(fileName, "utf8") }
  })
  .map(fileDescriptor => {
    fileDescriptor.json = JSON.parse(fileDescriptor.file)
    return fileDescriptor
  })
  .reduce((collection, fileDescriptor) => {
    fileDescriptor.json.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(
          `Duplicate message id: ${id} file: ${fileDescriptor.fileName}`
        )
      }

      collection[id] = defaultMessage
    })

    return collection
  }, {})


fs.writeFileSync(
  `${LOCALE_DIR}en.json`,
  JSON.stringify(defaultMessages, null, 2)
)

// Merge translated json files (en.json, es.json, fr.json, etc) into one object
const mergedTranslations = globSync(LOCALE_DIR + "*.json")
  .map(filename => {
    let last = filename.split("/")
    if (last.length > 0) last = last[last.length - 1]
    const locale = last.split(".json")[0]
    return { [locale]: JSON.parse(fs.readFileSync(filename, "utf8")) }
  })
  .reduce((acc, localeObj) => {
    return { ...acc, ...localeObj }
  }, {})

if (Object.keys(mergedTranslations.en).length !== 0) {
  for (const lang of Object.keys(mergedTranslations)) {
    if (lang !== "en") {
      for (const key of Object.keys(mergedTranslations.en)) {
        if (!mergedTranslations[lang][key]) {
          console.warn(`[requires translation] ${key} in lang ${lang}`)
        }
      }
      for (const key of Object.keys(mergedTranslations[lang])) {
        if (!mergedTranslations.en[key]) {
          console.warn(`[redundant] ${key} in lang ${lang}`)
        }
      }
    }
  }
}

mkdirpSync(BUILD_DIR)

// Merge translated json files and write the messages to this directory
fs.writeFileSync(
  `${BUILD_DIR}data.json`,
  JSON.stringify({ ...mergedTranslations }, null, 2)
)
