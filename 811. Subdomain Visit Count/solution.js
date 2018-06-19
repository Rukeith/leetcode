/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const dictionary = {};
    
  for (let i = 0; i < cpdomains.length; i++) {
    const infoArray = cpdomains[i].split(' ');
    const visitsAmount = +infoArray[0];
    const domainsArray = infoArray[1].split('.');
    let domain;
      
    for (let j = domainsArray.length - 1; j >= 0; j--) {
      domain = (domain) ? `${domainsArray[j]}.${domain}`: domainsArray[j];    
      if (!dictionary[domain]) dictionary[domain] = 0;
      dictionary[domain] += visitsAmount;
    }
  }

  return Object.keys(dictionary).map(domainName => `${dictionary[domainName]} ${domainName}`);
};