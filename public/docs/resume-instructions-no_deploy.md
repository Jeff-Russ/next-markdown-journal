# Résumé Instructions

ATS Friendly (machine readable) résumé may be generated by from two major `.json` format standards (FRESCA: *FRESH Résumé & Employment Schema* or JRS: *JSON Resume Schema*) using [HackMyResume](https://github.com/hacksalot/HackMyResume), which can be installed via command line.


```sh
npm install hackmyresume --location=global
```

But there are issues with v1.9.0 (see [Node throws error on 'hackmyresume new' · Issue #238 · hacksalot/HackMyResume](https://github.com/hacksalot/HackMyResume/issues/238)). So you may wish to install v1.8.0:

```sh
npm install hackmyresume@v1.8.0 --location=global
```

Output formats will include html, doc, txt and yaml by default but you can add pdf output by installing [wkhtmltopdf](http://wkhtmltopdf.org/).

On macOS:

```sh
brew install --cask wkhtmltopdf
```

 Or you can install for your OS of choice via [download](https://wkhtmltopdf.org/downloads.html).

HackMyResume will attempt to work with whatever pdf engine you have installed so you can try several other options like [Phantom.js](http://phantomjs.org/) or [WeasyPrint](http://weasyprint.org/).

## Helpful Links

* [HackMyResume](https://github.com/hacksalot/HackMyResume)
  * [FAQ](https://github.com/hacksalot/HackMyResume/blob/master/FAQ.md)
* [Automating my Resume with HackMyResume & FRESH | by Colin Wren | JavaScript in Plain English](https://javascript.plainenglish.io/automating-my-resume-with-hackmyresume-fresh-6b99d655b1a)
* on FRESCA: *FRESH Résumé & Employment Schema*
  * [fresca - npm](https://www.npmjs.com/package/fresca) 
  * [github.com/fresh-standard/fresh-resume-schema](https://github.com/fresh-standard/fresh-resume-schema)  (Shows top-level properties)
  * [FRESH-themes repository on Github](https://github.com/fresh-standard/fresh-themes)
  * [github.com/fluentdesk/fresh-themes](https://github.com/fluentdesk/fresh-themes)
* on  JRS: *JSON Resume Schema*)
  * [JSONResume/Schema](https://jsonresume.org/schema/) 
  * [JSON Resume Themes @npmjs](https://www.npmjs.com/search?q=jsonresume-theme)
  * [JSONResume.org/themes](https://jsonresume.org/themes) 

