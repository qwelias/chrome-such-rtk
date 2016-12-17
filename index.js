const host = /^http:\/\/(.+?)\//

chrome.webRequest.onBeforeSendHeaders.addListener( ( event ) => {
    event.requestHeaders.push( {
      name: 'HoSt',
      value: ' ' + event.url.match( host )[ 1 ]
    } )

    return { requestHeaders: event.requestHeaders }
  },
  { urls: [ 'http://*/*' ] },
  [ 'blocking', 'requestHeaders' ]
)
