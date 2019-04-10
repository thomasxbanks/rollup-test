// Returns true/false if the current url contains the given string
export const urlContains = (needle) => {
  let haystack = window.location.href;
  return haystack.includes(needle) ? true : false;
};

// Get the value of the given parameter
export const getURLParameter = (sParam) => {
  let sPageURL = window.location.search.substring(1);
  let sURLVariables = sPageURL.split('&');
  sURLVariables.forEach((object, index) => {
    var sParameterName = sURLVariables[index].split('=');
    if (sParameterName[0] === sParam) {
      // Log for debug
      console.log('URL parameter:', sParameterName[1]);
      return sParameterName[1];
    }
  });
};

export const getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}