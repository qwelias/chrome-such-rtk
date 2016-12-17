chrome.webRequest.onBeforeSendHeaders.addListener((event) => {
    for (let header of event.requestHeaders) {
      if (header.name === 'Host') {
        header.value = ' ' + header.value
      }
    }
    return { requestHeaders: event.requestHeaders };
  },
  {urls: ['http://**/*']},
  [ 'blocking', 'requestHeaders']
);
