import i18next from "i18next";
import enJson from "./locales/en.json";
import ptJson from "./locales/pt.json";
import esJson from "./locales/es.json";
export const i18n = i18next;
export const initI18n = (language) => {
  i18next.init(
    {
      lng: language || "en",
      debug: true,
      resources: {
        en: {
          translation: enJson,
        },
        pt: {
          translation: ptJson,
        },
        es: {
          translation: esJson,
        },
      },
    },
    function (err, t) {
      // Call this function once i18next is initialized
    }
  );
};
