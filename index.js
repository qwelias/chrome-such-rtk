chrome.webRequest.onBeforeSendHeaders.addListener( ( event ) => {
    const header = event.requestHeaders.find( h => header.name === 'Host' )
    if ( !header ) return
    
    header.value = ' ' + header.value
    return { requestHeaders: event.requestHeaders }
  },
  { urls: [ 'http://**/*' ] },
  [ 'blocking', 'requestHeaders' ],
)
