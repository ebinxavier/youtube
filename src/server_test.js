const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const fs = require("fs");
const fs = require("ls");
app.listen(3030, () => console.log("Listening 3030...!"));
app.use(cors());

app.get("/continuation", async (req, res) => {
  const raw = await fetch(
    "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,ml;q=0.8",
        authorization:
          "SAPISIDHASH 1601892106_5edb77236e0355be2449cba5ac03594f03603525",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "same-origin",
        "sec-fetch-site": "same-origin",
        "x-client-data":
          "CJW2yQEIorbJAQjBtskBCKmdygEIlqzKAQiZtcoBCPbHygEI58jKAQjpyMoBCPzNygEIwdfKAQie2MoBCPrYygE=",
        "x-goog-authuser": "0",
        "x-goog-visitor-id": "CgthOGdCTnUtUTUwWSj9zOv7BQ%3D%3D",
        "x-origin": "https://www.youtube.com",
        cookie:
          "VISITOR_INFO1_LIVE=a8gBNu-Q50Y; CONSENT=YES+IN.en+; PREF=f1=50000000&al=en&f4=4000000&f5=30030&f6=400; LOGIN_INFO=AFmmF2swRgIhALHkK8rOzrTqqVITsXk5d9K6xpJAxJSArIURmW5RryMwAiEAjM-4LcF6lgrvoDc-KAIlX_sRGVrW3kL9BxIyGulEVf8:QUQ3MjNmeW16U3ZYd3Aza2luV2NfVXVCb0g4VVVQNFhQNmZ6WXVnWlhVR0VnTllJU0VrQkxpbzRkdkxvSERHZ3gxSE8yNHRFUjM2aWhna1M3QzBiVHdMbDFaMmxyYzRLMmFSODlVLWF6YUI3N0xoaENQdWJubVJrbUFyXy15azFaSjFDcDdSOS1reHU3UjdQN2JmMlNQWWhCM1VyekhneXRtcS15WXVZc01pdWNZa19vX2xZa2FR; YSC=KbR9PnKmtYQ; wide=1; SID=1wcE_rOTH9w5oh7kvjnL-xY72Tex0n_nF4YTrRS2OtXmzI3s1SG8QbVZDhckT88gmhhdgw.; __Secure-3PSID=1wcE_rOTH9w5oh7kvjnL-xY72Tex0n_nF4YTrRS2OtXmzI3smQFRGYBvUzSY5PigHmwm_Q.; HSID=Aj3JAVF4IWveO69I8; SSID=ADhJUJDxzlO9x80pT; APISID=LTqNDVQjkI-Lpsb4/A_QRjDafzarOcQaTn; SAPISID=Es8wsIlCMaA9tXHC/AwkvEDrRSogFoVDOt; __Secure-3PAPISID=Es8wsIlCMaA9tXHC/AwkvEDrRSogFoVDOt; SIDCC=AJi4QfG6gV6wV1LWbiI68D1lUkmRGNUeEXHpCJzYQLz8pM51qNXHyBj-d1F5ZrWfbZ4wGEfr4BY; __Secure-3PSIDCC=AJi4QfFwUgAJfUnSZX8CWUNb8aiiuFgN97eSy9p-2qcKAw4_7K0C7EqGGVi9HxZ_lgyFOIKElQ",
      },
      referrer:
        "https://www.youtube.com/results?search_query=react.js+tutorial",
      referrerPolicy: "origin-when-cross-origin",
      body:
        '{"context":{"client":{"hl":"en","gl":"AE","visitorData":"CgthOGdCTnUtUTUwWSigmev7BQ%3D%3D","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36,gzip(gfe)","clientName":"WEB","clientVersion":"2.20201002.02.01","osName":"Macintosh","osVersion":"10_15_6","browserName":"Chrome","browserVersion":"85.0.4183.121","screenWidthPoints":1440,"screenHeightPoints":492,"screenPixelDensity":2,"screenDensityFloat":2,"utcOffsetMinutes":240,"userInterfaceTheme":"USER_INTERFACE_THEME_DARK","connectionType":"CONN_CELLULAR_4G"},"request":{"sessionId":"6871175877036405342","internalExperimentFlags":[],"consistencyTokenJars":[]},"user":{},"clientScreenNonce":"MC4zNDU5MjExMDMwMjE4NTk4NQ..","clickTracking":{"clickTrackingParams":"CBwQui8iEwj0gLLaiJ3sAhVoLPEFHdvQBXU="}},"continuation":"' +
        req.query.continuation +
        '"}',
      method: "POST",
      mode: "cors",
    }
  );
  const data = await raw.json();
  res.send(data);
});

app.get("/formation", async (req, res) => {
  const raw = await fetch(
    "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,ml;q=0.8",
        authorization:
          "SAPISIDHASH 1601892106_5edb77236e0355be2449cba5ac03594f03603525",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "same-origin",
        "sec-fetch-site": "same-origin",
        "x-client-data":
          "CJW2yQEIorbJAQjBtskBCKmdygEIlqzKAQiZtcoBCPbHygEI58jKAQjpyMoBCPzNygEIwdfKAQie2MoBCPrYygE=",
        "x-goog-authuser": "0",
        "x-goog-visitor-id": "CgthOGdCTnUtUTUwWSj9zOv7BQ%3D%3D",
        "x-origin": "https://www.youtube.com",
        cookie:
          "VISITOR_INFO1_LIVE=a8gBNu-Q50Y; CONSENT=YES+IN.en+; PREF=f1=50000000&al=en&f4=4000000&f5=30030&f6=400; LOGIN_INFO=AFmmF2swRgIhALHkK8rOzrTqqVITsXk5d9K6xpJAxJSArIURmW5RryMwAiEAjM-4LcF6lgrvoDc-KAIlX_sRGVrW3kL9BxIyGulEVf8:QUQ3MjNmeW16U3ZYd3Aza2luV2NfVXVCb0g4VVVQNFhQNmZ6WXVnWlhVR0VnTllJU0VrQkxpbzRkdkxvSERHZ3gxSE8yNHRFUjM2aWhna1M3QzBiVHdMbDFaMmxyYzRLMmFSODlVLWF6YUI3N0xoaENQdWJubVJrbUFyXy15azFaSjFDcDdSOS1reHU3UjdQN2JmMlNQWWhCM1VyekhneXRtcS15WXVZc01pdWNZa19vX2xZa2FR; YSC=KbR9PnKmtYQ; wide=1; SID=1wcE_rOTH9w5oh7kvjnL-xY72Tex0n_nF4YTrRS2OtXmzI3s1SG8QbVZDhckT88gmhhdgw.; __Secure-3PSID=1wcE_rOTH9w5oh7kvjnL-xY72Tex0n_nF4YTrRS2OtXmzI3smQFRGYBvUzSY5PigHmwm_Q.; HSID=Aj3JAVF4IWveO69I8; SSID=ADhJUJDxzlO9x80pT; APISID=LTqNDVQjkI-Lpsb4/A_QRjDafzarOcQaTn; SAPISID=Es8wsIlCMaA9tXHC/AwkvEDrRSogFoVDOt; __Secure-3PAPISID=Es8wsIlCMaA9tXHC/AwkvEDrRSogFoVDOt; SIDCC=AJi4QfG6gV6wV1LWbiI68D1lUkmRGNUeEXHpCJzYQLz8pM51qNXHyBj-d1F5ZrWfbZ4wGEfr4BY; __Secure-3PSIDCC=AJi4QfFwUgAJfUnSZX8CWUNb8aiiuFgN97eSy9p-2qcKAw4_7K0C7EqGGVi9HxZ_lgyFOIKElQ",
      },
      referrer:
      method: "POST",
      mode: "cors",
    }
  );
  const data = await raw.json();
  const data2 = await raw.json();
  res.send(data);
});
