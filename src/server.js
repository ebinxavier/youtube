/* eslint-disable no-eval */
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.listen(3030, () => console.log("Listening 3030...!"));
app.use(cors());

app.get("/search", async (req, res) => {
  const raw = await fetch(
    "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        context: {
          client: {
            clientName: "WEB",
            clientVersion: "2.20201002.02.01",
          },
        },
        query: req.query.search,
      }),
    }
  );
  const data = await raw.json();
  fs.writeFile("./response.json", JSON.stringify(data, null, 2), function (
    err
  ) {
    if (err) return console.log(err);
  });
  //   Process the response to filter out minimal data.
  try {
    const contents =
      data.contents.twoColumnSearchResultsRenderer.primaryContents
        .sectionListRenderer.contents;
    const videos = contents.filter((content) => {
      try {
        if (
          content.itemSectionRenderer.contents.some(
            (item) => item.videoRenderer
          )
        )
          return true;
      } catch (e) {
        return false;
      }
      return false;
    })[0];
    const result = videos.itemSectionRenderer.contents
      .map((item) => {
        try {
          const {
            videoRenderer: {
              title,
              publishedTimeText: { simpleText: publishedOn },
              descriptionSnippet: description,
              thumbnail,
              richThumbnail,
              videoId,
              shortViewCountText: { simpleText: views },
              ownerText: { runs: owner },
              thumbnailOverlays,
            },
          } = item;
          return {
            title,
            description,
            thumbnail: thumbnail.thumbnails.slice(-1)[0],
            richThumbnail,
            videoId,
            views,
            publishedOn,
            owner: owner[0] ? owner[0].text : "",
            time:
              thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text
                .simpleText,
          };
        } catch (e) {
          return null;
        }
      })
      .filter((e) => e); // remove null values
    res.send({ status: "success", result });
  } catch (error) {
    console.log("error", error);
    res.send({ status: "error", error, result: [] });
  }
});

app.get("/suggestions", async (req, res) => {
  console.log("req.query.search", req.query.search);
  const raw = await fetch(
    "https://clients1.google.com/complete/search?client=youtube&hl=en&gl=ae&gs_rn=64&gs_ri=youtube&tok=LY3DgHuByoU2kftmJiC5Pw&ds=yt&cp=3&gs_id=1z&q=" +
      req.query.search +
      "&callback=google.sbox.p50&gs_gbg=av66T4",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,ml;q=0.8",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "cross-site",
        "x-client-data":
          "CJW2yQEIorbJAQjBtskBCKmdygEIlqzKAQiZtcoBCPbHygEI58jKAQjpyMoBCPzNygEIwdfKAQie2MoBCPrYygE=",
        cookie:
          "__Secure-3PSID=1wcE_rOTH9w5oh7kvjnL-xY72Tex0n_nF4YTrRS2OtXmzI3smQFRGYBvUzSY5PigHmwm_Q.; __Secure-3PAPISID=Es8wsIlCMaA9tXHC/AwkvEDrRSogFoVDOt; ANID=AHWqTUkKV8S71z7oTq99eNv6T5m5xv4UhJ8jNYNQyEaFrDQm0zRDpqJhsiDmo_D-; NID=204=Z2gmZTpyvBFbAt1sEPIP6zJohMUfdtUxqw4WmZAhZAuXDcxoQAJMROVFlojXAwQYv053S_-42XVMMP1LGa7YUMzdVNfHEEyHUvw6ZzJxXsKJaQ-7LuznXp52-7_PbL2HRl76fSeuWH53d4-7iwRet1o4G0hiBXwHvKwfZH06X6PaSQ--feE1rmSllZApKm1J_r41EL2Wr9Pvnvau0frBrHCEeavUFG_06eec4T4EUktFW8u91k7S3NRJgnZK9rOPjF3M9kFs_cn7Ct_y; 1P_JAR=2020-10-05-08; __Secure-3PSIDCC=AJi4QfGZ7QnxiaUmQuKSo0_C-IccKGdzLmVWbwRpHnl36jGdZ547YZuHTUqkMohahgX8MDDhlbaL",
      },
      referrer: "https://www.youtube.com/",
      referrerPolicy: "origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    }
  );
  const data = await raw.text();
  let result;
  const google = {
    // used by eval function
    sbox: { p50: (data) => (result = data[1].map((item) => item[0])) },
  };
  try {
    eval(data);
  } catch (e) {
    res.send({ status: "error", result: [] });
  }
  res.send({ status: "success", result, data });
});

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
