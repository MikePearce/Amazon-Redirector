/**
 * Redirect Amazon.com to Amazon.co.uk
 * Icon Attribution: http://thenounproject.com/noun/merge/#icon-No539
 * @author Mike Pearce <mike@mikepearce.net>
 * @date 15/04/2012
 * @todo: 
 *      Check for 400 errors before making the replacement, 
 *      allow for selecting of different domains, 
 *      allow for holding of a key to disable redirection onClick
 */
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    var newUrl = info.url.replace(/\.com/ig, ".co.uk");
    return {redirectUrl: newUrl};
  },
  // filters
  {
    urls: [
      "http://www.amazon.com/*"
    ]
  },
  // extraInfoSpec
  ["blocking"]);
