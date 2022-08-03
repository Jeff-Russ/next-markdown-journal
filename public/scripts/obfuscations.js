decodeHrefMailtoEmailAddresses()
decodeHrefTelNumber()

/* decodeHrefMailtoEmailAddresses gets all <a> with class names starting with 'username-at-', 
  which will be interpreted as the @ symbol and interprets remaining part of class string 
  as domain name and domain (like gmail.com) in reverse and with '-' in place of '.' 
  The email username is taken from incomplete href in reverse.

  Example:

  <a className='nobot jeff-e-mail username-at-moc-liamg align-top' href='ssurnnylyerffej'>ssur</a>

*/
function decodeHrefMailtoEmailAddresses() {
  let a_elems = document.getElementsByTagName('a')
  for (let a of a_elems) {
    for (let class_name of a.classList) {
      if (class_name.indexOf('username-at-') == 0) {
        // The email username is taken from incomplete href:
        let email_username = a.getAttribute('href').split('').reverse().join('')
        // (NOTE: a.getAttribute("href") not a.href as the latter prepends domain of this site)
        // (NOTE: reverse() only works on arrays, hence split and join)

        // The domain name and domain (like gmail.com) are taken from
        // the the <a> class name (starting with `username-at-`, but excluding that)
        // reversed, with all '-' replaced with '.'
        let domain_name_and_domain = class_name
          .substring('username-at-'.length)
          .replace('-', '.')
          .split('')
          .reverse()
          .join('')

        // assemble full email address, prepending 'mailto:' to form new href
        let new_href = `mailto:${email_username}@${domain_name_and_domain}`

        a.href = new_href
        break
      }
    }
  }
}

/* decodeHrefTelNumber() gets all <a> with class names starting with 'area-exchangenum-', 
  with the portion after this interpreted as area code and exchange of a phone number. 
  The remaining four digits of the phone number (called the 'subscriber number') are taken 
  from the href in reverse. 
  https://www.campaignmonitor.com/blog/email-marketing/using-phone-numbers-in-html-email/

  Example:

  <a className='nobot jeff-ph-num area-exchangenum-702-237' href='5433'>702</a> 

*/
function decodeHrefTelNumber() {
  let a_elems = document.getElementsByTagName('a')
  for (let a of a_elems) {
    for (let class_name of a.classList) {
      if (class_name.indexOf('area-exchangenum-') == 0) {
        // The subscriber number is taken from incomplete href, reversed:
        let subscriber_num = a.getAttribute('href').split('').reverse().join('')
        // (NOTE: a.getAttribute("href") not a.href as the latter prepends domain of this site)
        // (NOTE: reverse() only works on arrays, hence split and join)

        // The area code and exchange number are taken from
        // the the <a> class name (starting with `area-exchangenum-`,
        // but excluding that) reversed.
        let exchange_subscribernum = class_name
          .substring('area-exchangenum-'.length)
          .split('')
          .reverse()
          .join('')

        // assemble full phone number, prepending 'tel:+1' to form new href.
        // (+1 is the country code, which I think is optional)
        let new_href = `tel:+1${exchange_subscribernum}-${subscriber_num}`

        a.href = new_href
        break
      }
    }
  }
}
