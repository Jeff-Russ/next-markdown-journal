# Next.js Markdown Journal

<!-- ![banner](img/banner.png) -->

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

This is a personal or professional journal/posts starter build on [Next.js](https://nextjs.org/), a [React](https://reactjs.org) framework, with [Tailwind CSS](https://tailwindcss.com) and content provided as markdown or [MDX](https://mdxjs.com) files by one or more authors. It is adapted from [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template by [Timothy Lin](https://github.com/timlrx), extended to include a resume and support non-blog pages (also authored in MD or MDX), among other features. It is the source code for [jeffruss.com](https://www.jeffruss.com/posts) but, like the Tailwind Nextjs Starter Blog, can be used as a template as well.  Here are some other features:

- Light and dark theme with easy styling customization with [Tailwind 3.0](https://tailwindcss.com/posts/tailwindcss-v3).
- Mobile-friendly and responsive
- SEO friendly with RSS feed, sitemaps, etc.
- Preconfigured security headers
- Newsletter support using mailchimp, buttondown, convertkit, klaviyo and revue
- Analytics support with [plausible](https://plausible.io/), [simple analytics](https://simpleanalytics.com/) and google analytics
- For all MD/MDX pages:
  - Code blocks with syntax highlighting, copy button, line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus) 
  - Math blocks and inline math display supported via [KaTeX](https://katex.org/)
  - Citation / bibliography support with  [rehype-citation](https://github.com/timlrx/rehype-citation)
  - Support for nested routing of blog posts and pages

- Blog/Journal Posts with script for generating boilerplate with metadata (Frontmatter):
  - Support for tags - each unique tag will be its own page
  - Support for multiple authors
  - Table of Contents component
  - Comment system using [giscus](https://github.com/laymonage/giscus), [utterances](https://github.com/utterance/utterances) or disqus

## Table of Contents

- [Installation](#installation)
- [Customized Usage](#customized-usage)
  - [Overview](#overview)
  - [Authoring Content](#authoring-content)
    * [Table of Contents component](#table-of-contents-component)
    * [Code blocks](#code-block-line-highlighting-and-line-numbers)
    * [Bibliography and Citations](#bibliography-and-citations )
  - [Environment Variables and Secrets](#environment-variables-and-secrets)
  - [Self-hosted fonts](#self-hosted-fonts)
  - [Blog comments system](#blog-comments-system)
    * [Giscus Setup](#giscus-setup)
  - [Analytics](#analytics)
    * [Google Analytics Setup](#google-analytics-setup)
  - [Newletter component](#newletter-component)
    * [Buttondown setup](#buttondown-setup)
  - [Deployment](#deployment)  
  
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)



## Installation

This project uses [node](http://nodejs.org/) and [npm](https://npmjs.com/), which must be locally installed, along with [git](https://github.com/git-guides/install-git).

To install with the intent to [Contribute](#contributing) changes:

```sh
git clone https://github.com/Jeff-Russ/next-markdown-journal.git
cd next-markdown-journal
npm install
```

To install with the intent to customize for personal use:

```sh
npx degit https://github.com/Jeff-Russ/next-markdown-journal.git
cd next-markdown-journal
npm install
```

To run the app, making it available at available [http://localhost:3000](http://localhost:3000) you can run `npm run dev` or you can run:

```sh
npm start
```

This way will reload application markdown and other contents of `data/` changes.

## Customized Usage

### Overview

`data/siteMetadata.js` is where most information related to a customized deployment of the app would be set, with some values are taken as `process.env.NEXT_PUBLIC_*` environment variables set in `.env*` files. The value set for `defaultAuthorSlug` in `data/siteMetadata.js`  must match a filename without extension which is located within `data/authors`.  This file will be used to define the metadata for the default author of a post when none is specified, as well as the author details displayed on `/about` page. 

Overall, you'll at least need to create or modify the following files:

* Modify `data/siteMetadata.js`, which contains most of the site related information which should be modified for a user's needs.
* Create `` `authors/${siteMetadata.defaultAuthorSlug}.md|mdx` `` which is the default author information. Additional authors can be added as files in `data/authors/`.
* Modify `data/projectsData.js`  to generate styled cards on the `/projects` page.
* Replace images in `public/static/favicons/` with your own logo.
* Replace/add images in  `public/static/images/` referenced in `data/siteMetadata.js` as well in author files in `data/authors/` and any posts you may create in `data/posts` and `data/pages`.
* Replace files in `data/posts`  with your own posts.

Additionally you may need or want to do the following:

* Modify `next.config.js` to adapt the Content Security Policy if you want to load scripts, images etc. from other domains. You'll also modify `ContentSecurityPolicy` to your choice of analytics and commenting system.
* Modify `tailwind.config.js` and `css/tailwind.css`  to change styling of the site.
* Modify or add files to `layouts/` to change the layout and styling pages. The component filenames must match what it specified in the markdown frontmatter `layout` field. 
* Modify `css/prism.css` to change the styles associated with the code blocks, such as by using your preferred [prism theme](https://github.com/PrismJS/prism-themes).
* Add other icons to `components/social-links`  such as from [Simple Icons](https://simpleicons.org/) or [heroicons](https://heroicons.com/).and map them in `index.js`. 
* Modify `data/navLinks.js` if you'd like to change the links in the navbar. 
* Modify `./components/Pre.js` to customize how all code blocks (rendered as `<pre>` elements) are rendered.
* Install and use a self-hosted font from [Fontsource](https://fontsource.org/). 

### Authoring Content

You can run `node ./scripts/compose.js` and follow the interactive prompt to generate a post with pre-filled frontmatter.

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/). Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Both `.md` and `.mdx`, beside the frontmatter, are authored in [markdown syntax](https://www.markdownguide.org/basic-syntax/) but `.mdx` files allow for [React components as JSX elements](https://reactjs.org/docs/introducing-jsx.html) to be inserted such as `<TOCInline >`

#### Table of Contents component

The `props.toc` variable containing all the top headings of the document is passed to the MDX file and can be styled into a table of contents by providing it as the value of the `toc` attribute of `<TOCInline >`. For example, the following can be added to a `.mdx` post:

```jsx
<TOCInline toc={props.toc} exclude="Overview" toHeading={2} />
```

* You can customize the range of heading depths that are displayed by configuring the `fromHeading` and `toHeading` props.
* Exclude particular headings by passing a string or a string array to the `exclude` prop. 
* You can change the indent size of each deeper heading relative to the previous by setting the  `indentRem` property. Typical values would be `0.5` to `5`.s
* The `asDisclosure` prop can be used to render the TOC within an expandable disclosure element. 
* Adding a `closed` attribute in addition to `asDisclosure` makes the TOC be collapsed by default.

```jsx
<TOCInline toc={props.toc} asDisclosure closed />
```

#### Code block line highlighting and line numbers

* The following code block will have lines 1, 3 and 4 highlighted due to the addition of `{1, 3-4}`. 
* Line numbers are displayed  due to the addition of `showLineNumbers`

```js {1, 3-4} showLineNumbers
var num1, num2, sum
num1 = prompt('Enter first number')
num2 = prompt('Enter second number')
sum = parseInt(num1) + parseInt(num2) // "+" means "add"
alert('Sum = ' + sum) // "+" means combine into a string
```

To modify the styles applied to this, change the `.code-highlight`, `.code-line`, `.code-line.inserted`, `.code-line.deleted`,  `.highlight-line`,  and `.line-number::before` class selectors in the `prism.css` file.

#### Bibliography and Citations 

`rehype-citation` plugin is added to the xdm processing pipeline in v1.2.1. This allows you to easily format citations and insert bibliography from an existing bibtex or CSL-json file.

For example, the following markdown code sample:

```md
Standard citation [@Nash1950]
In-text citations e.g. @Nash1951
Multiple citations [see @Nash1950; @Nash1951, page 50]

**References:**

[^ref]
```

is rendered to the following:

Standard citation [@Nash1950]  
In-text citations e.g. @Nash1951  
Multiple citations [see @Nash1950; @Nash1951, page 50]

**References:**

[^ref]

A bibliography will be inserted at the end of the document, but this can be overwritten by specifying a `[^Ref]` tag at the intended location.
The plugin uses APA citation formation, but also supports the following CSLs, 'apa', 'vancouver', 'harvard1', 'chicago', 'mla', or a path to a user-specified CSL file.  

See [rehype-citation readme](https://github.com/timlrx/rehype-citation) for more information on the configuration options.  

### Environment Variables and Secrets

According to [next.js/docs/basic-features/environment-variables.md on GitHub](https://github.com/vercel/next.js/blob/canary/docs/basic-features/environment-variables.md) sensitive data should only be specified in `.env.local` as it is where secrets should be stored. As a result, it, along with all other `.env*.local` files are `.gitignore`d. Default values should be defined in ` .env`, `.env.development`, and `.env.production` which all should be files should be included in your repository.  

In all likelihood, You will need to create the file `.env.local`. as a duplicate of `.env.example` and then fill in the values as needed as per the instructions below.   

For more information on the required variables, check out `.env.example` and [this guide](https://nextjs.org/docs/basic-features/environment-variables) 

### Self-hosted fonts

Fonts can be added from [Fontsource](https://fontsource.org/). These are self-hosted fonts which have [advantages](https://fontsource.org/docs/introduction):

> Self-hosting brings significant performance gains as loading fonts from hosted services, such as Google Fonts, lead to an extra (render blocking) network request. To provide perspective, for simple websites it has been seen to double visual load times.
>
> Fonts remain version locked. Google often pushes updates to their fonts without notice, which may interfere with your live production projects. Manage your fonts like any other NPM dependency.
>
> Commit to privacy. Google does track the usage of their fonts and for those who are extremely privacy concerned, self-hosting is an alternative.

This leads to a smaller font bundle and a 0.1s faster load time ([webpagetest comparison](https://www.webpagetest.org/video/compare.php?tests=220201_AiDcFH_f68a69b758454dd52d8e67493fdef7da,220201_BiDcMC_bf2d53f14483814ba61e794311dfa771)).

The default font is [Fontsource's 'inter' font](https://fontsource.org/fonts/inter). You can see the dependency `"@fontsource/inter"` is added to `package.json`. 

To change the default font ([here](https://www.tailwindtoolbox.com/guides/adding-fonts-to-tailwind-css) is another good guide if you need further details):


1. Pick a font at [Fontsource](https://fontsource.org/fonts). Here are some notable ones:
   * `abril-fatface` is good for attention-grabbing headings.
   * For: mono fonts: `fira-mono`, `source-code-pro` are decent.
   * Regular looking for paragraphs: `inter`, `poppins` and `abel` (both sans)
   * Interesting looking for paragraphs: `alice` (serif)
   * Very interesting looking for paragraphs: `advent-pro`, `aldrich` (both sans)
   * A versatile collection: The `ibm-plex-*` fonts.
2. Install the preferred [font](https://fontsource.org/fonts) - `npm install -save @fontsource/<font-name>`

You might need to do some sleuthing inside `node_modules/@fontsource/<font-name>/` to do the next two steps.  

3. Update the import at `pages/_app.js`- `import '@fontsource/<font-name*>'`. Do you sleuthing: If you want to import `node_modules/@fontsource/alice/index.css`, the `*` in `<font-name*>` would be nothing; you would just:`import '@fontsource/alice'`. But you may want to import different files such as  `node_modules/@fontsource/inter/variable-full.css` in which case the import statement would be `import '@fontsource/inter/variable-full.css'` 
4. Update the `fontfamily` property in the `tailwind.config.js` file. Read [this](https://tailwindcss.com/docs/font-family#customizing-your-theme) and [this](https://tailwindcss.com/docs/font-family#customizing-the-default-font) for help. Again, you'll need to do some sleuthing. Taking the example of the `inter` font where we did `'@fontsource/inter/variable-full.css'` we see in that file the line `font-family: 'InterVariable'` which means we add `sans: ['InterVariable', ...defaultTheme.fontFamily.sans],` to  `tailwind.config.js` because we found `'InterVariable'` is the font family and it is a sans serif font. 

Of course, if you are not using any particular font such as `@fontsource/<unused-font-name>`, you can then delete it with `npm uninstall -save @fontsource/<unused-font-name>`.

### Blog comments system

We have also added support for [giscus](https://github.com/laymonage/giscus), [utterances](https://github.com/utterance/utterances) or disqus for comments to posts.  To enable a blog comments system, edit the `siteMetadata.analytics` properties in  `siteMetadata.js` . Some correspond to the following environment variables found in `.env*` such as `.env.local`:

```text
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=

NEXT_PUBLIC_UTTERANCES_REPO=

NEXT_PUBLIC_DISQUS_SHORTNAME=
```

#### Giscus Setup

In addition to the these four environmental variables for Giscus:

`GISCUS_REPO` which sets `siteMetadata.comment.giscusConfig.repo`   
`GISCUS_REPOSITORY_ID` which sets `siteMetadata.comment.giscusConfig.repositoryId`  
`GISCUS_CATEGORY` which sets `siteMetadata.comment.giscusConfig.category`  
`GISCUS_CATEGORY_ID` which sets `siteMetadata.comment.giscusConfig.categoryId`    

...we also need these values:   

`siteMetadata.comment.giscusConfig.mapping`   
`siteMetadata.comment.giscusConfig.reactions`   
`siteMetadata.comment.giscusConfig.metadata`  
`siteMetadata.comment.giscusConfig.inputPosition`   
`siteMetadata.comment.giscusConfig.lang = en`  
`siteMetadata.comment.giscusConfig.theme`   
`siteMetadata.comment.giscusConfig.darkTheme`   
`siteMetadata.comment.giscusConfig.themeURL`   

Visiting  https://giscus.app/ will provide us with these values, but here is a more in-depth is a summary of the instructions (highighted content shows the variable value obtained with each steps):  

##### Giscus Repository Setup

**Repository** section at https://giscus.app/:  

> 1. We see we should pick a **public** repository on GitHub to hold the discussion. I believe this can be the repository that has the source for your site but doesn't have to be; it can simply be a repository who's only purpose is to hold the discussions. 
> 2. Next we **install the giscus app**: Visit https://github.com/apps/giscus, click "Install," selecting "Only select repositories," selecting the one or more respositories and then clicking "install." Doing so will probably take you [here, where you can configure Giscus](https://github.com/settings/installations/). 
> 3. Next, [enable the Discussions feature for your repository](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository) by visiting **Settings > General at your repository on Github and checking off "Discussions."** Keep this page open because later on we'll hit "Set up Discussions."
>

Now back in the bottom of the 'Configuration' section at https://giscus.app/, you should be to type your `github-username/project-name` and have it say "**Success! This repository meets all of the above criteria**." After choosing our repository, we can now use it to assign our environment variable:   

<mark>GISCUS_REPO=github-username/project-name</mark> which sets `siteMetadata.comment.giscusConfig.repo`     

If you scroll down the page at after seeing "Success! This repository meets all of the above criteria" to the "Enable giscus" section, you'll see a value for `data-category-id="SOME_VALUE"` which can use to set the environment variable:  

<mark>GISCUS_REPOSITORY_ID="SOME_VALUE"</mark> which sets `siteMetadata.comment.giscusConfig.repositoryId`    

##### Giscus Page ↔ Discussions Mapping

The **Page ↔ Discussions Mapping** section (after 'Repository') at https://giscus.app/ is where we choose the mapping between the embedding page and the embedded discussion.   

> ☑ *Discussion title contains page* `pathname` — Giscus will search for a discussion whose title contains the page's `pathname` URL component. 
> ☐ *Discussion title contains page* `URL` —  Giscus will search for a discussion whose title contains the page's URL.
> ☐ *Discussion title contains page* `<title>` —  Giscus will search for a discussion whose title contains the page's `<title>` HTML tag.
> ☐ *Discussion title contains page* `og:title` — Giscus will search for a discussion whose title contains the page's [`<meta property="og:title">`](https://ogp.me/) HTML tag.
> ☐ *Discussion title contains a specific term* —  Giscus will search for a discussion whose title contains a specific term.
> ☐ *Specific discussion number* —  Giscus will load a specific discussion by number. This option **does not** support automatic discussion creation.

Choose the `pathname` option since others might not be distinct. <mark>But beware of modifying the site to change paths!</mark> I'm not sure that this would be a problem but it certainly may be.  In any case, we don't need to fill this out here as we will set this in:     

<mark>siteMetadata.comment.giscusConfig.mapping = 'pathname'</mark>   

##### Giscus Discussion Category

At the **Discussion Category** section at https://giscus.app/ you won't find a category that suits what we are doing so...  

Back in *Settings > General at your repository* where you checked off "Discussions," click "**Set up Discussions**." This will take you to a pre-written message from you to "Start a new discussion." Click "Start discussion" to post it. Now click on the Discussions tab (already selected) to take you to the home of Discussions. Click on the pencil logo next to "Categories" to create a new category. Click "New category." Make the title be "**Blog Comments**," make the icon be the speech_balloon, type whatever you want for "Description," such as the url for the blog  and select "Open ended Discussion" and hit "Create."  

> 1. Now at the **Discussion Category** section at https://giscus.app/ you can select "**Blog Comments**."
> 2. We can select **"only search for discussions in this category"** — when searching for a matching discussion, giscus will only search in this category.
>

After creating the category "Blog Comments" we can now use it to assign our environment variables:  

<mark>GISCUS_CATEGORY="Blog Comments"</mark> which sets `siteMetadata.comment.giscusConfig.category`    

If you scroll down the page at after seeing "Blog Comments" to the "Enable giscus" section, you'll see a value for `data-category-id="SOME_VALUE"` which can use to set the environment variable:  

<mark>GISCUS_CATEGORY_ID="SOME_VALUE"</mark> which sets `siteMetadata.comment.giscusConfig.categoryId`     

##### Giscus Features

At the **Features** section at https://giscus.app/ we choose whether specific features should be enabled. We can toggle on or off each of the following, but we'll just select the first one for now.

> <mark>☑</mark> *Enable reactions for the main post* — The reactions for the discussion's main post will be shown before the comments. We'll  set this in:  
> <mark>siteMetadata.comment.giscusConfig.reactions = 1</mark>    
>
> ☐ *Emit discussion metadata* — Discussion metadata will be sent periodically to the parent window (the embedding page). For demonstration, enable this option and open your browser's console on this page. See [the documentation](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#imetadatamessage) for more details. We'll  set this in:  
> <mark>siteMetadata.comment.giscusConfig.metadata = 0</mark>   
>
> ☐ *Place the comment box above the comments* — The comment input box will be placed above the comments, so that users can leave a comment without scrolling to the bottom of the discussion. We'll  set this in:   
> <mark>siteMetadata.comment.giscusConfig.inputPosition = 'bottom'</mark>   
>
> ☐ *Load the comments lazily* — Loading of the comments will be deferred until the user scrolls near the comments container. This is done by adding [`loading="lazy"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-loading) to the `<iframe>` element. I'm not sure where this is set by our website.
>

##### Giscus Theme

At the **Theme** section at https://giscus.app/, we choose a theme that matches your website. I think we'll choose preferred_color_scheme but it doesn't matter since this will be set in 

<mark>siteMetadata.comment.giscusConfig.theme = 'light'</mark>   
<mark>siteMetadata.comment.giscusConfig.darkTheme = 'transparent_dark'</mark>  
and possibly.   
<mark>siteMetadata.comment.giscusConfig.themeURL = ''</mark>    

##### Enable giscus

At the **Enable giscus** section at https://giscus.app/, we add the following `<script>` tag (with the square bracket values below with their appropriate values filled in for us) to our website's template where you want the comments to appear. If an element with the class `giscus` exists, the comments will be placed there instead.

```
<script src="https://giscus.app/client.js"
        data-repo="[ENTER REPO HERE]"
        data-repo-id="[ENTER REPO ID HERE]"
        data-category="[ENTER CATEGORY NAME HERE]"
        data-category-id="[ENTER CATEGORY ID HERE]"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
```

You can customize the container layout using the `.giscus` and `.giscus-frame` selectors from the embedding page.

##### Add giscus to `next.config.js`

Next add giscus to the  content security policy in the `next.config.js` file:

```js
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`
```

### Analytics

The template now supports [plausible](https://plausible.io/), [simple analytics](https://simpleanalytics.com/) and google analytics, and [umami](https://umami.is/docs/about).

After configuring your site, `<Analytics />` is loaded into `pages/_app.js`, if you are not on the development server. 

Custom events are also supported. You can import the `logEvent` function from `@components/analytics/[ANALYTICS-PROVIDER]` file and call it when triggering certain events of interest.  

_Note_: Additional configuration might be required depending on the analytics provider, please check their official documentation for more information.


#### Google Analytics Setup

First, configure `siteMetadata.js` with the settings that correspond with the desired analytics provider.

```js
	analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. next-markdown-journal.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // e.g. UA-000000-2 or G-XXXXXXX
  },
```

The last two are set in `.env*` such as `.env.local`.

* To get your **googleAnalyticsId**, go to [Sign into Google Analytics](https://analytics.google.com/analytics/web/) On the top, to the 
  left of the search field you should see:

  > All accounts > YOURSITE.COM  
  > All Web Site Data

  If 'YOURSITE.COM' is not the domain you're working on, click on 'All Web Site Data.' In this modal, you'll see your Analytics account o
  n the left pane. Select that and you'll see all of your domains in the middle pane. Here you should see the google Analytics Id for that 
  domain.   
  You can get more details by select the domain  then on the right  pane you'll 'All Web Site Data'... click that.  
  You'll see a gear icon on the lower left. If you see 'Admin' to the right of it, click it to view the Admin details for that domain.     

* If you want to use an analytics provider you have to **add it to the content security policy in the `next.config.js` file**. You would probably have to add www.googletagmanager.com and www.google-analytics.com if you are using google analytics.  After that along with `giscus.app` added, it may look as shown below:

  ```js
  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app *.googletagmanager.com *.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
    frame-src giscus.app
  `
  ```

### Newletter component

The newsletter component gives you an easy way to build an audience. It integrates with the following providers:

- [Mailchimp](https://mailchimp.com/)
- [Buttondown](https://buttondown.email/)
- [Convertkit](https://convertkit.com/)

To use it, specify the provider which you are using in the `next.config.js` file and add the necessary environment variables to the `.env*` file.

Two components are exported, a default `NewsletterForm` and a `BlogNewsletterForm` component, which is also passed in as an MDX component
and can be used in a blog post:

```jsx
<BlogNewsletterForm title="Like what you are reading?" />
```

The component relies on nextjs's [API routes](https://nextjs.org/docs/api-routes/introduction) which requires a server-side instance of nextjs to be setup and is not compatible with a 100% static site export. Users should either self-host or use a compatible platform like Vercel or Netlify which supports this functionality.

A static site compatible alternative is to substitute the route in the newsletter component with a form API endpoint provider.

#### Buttondown setup

Go to [Buttondown](https://buttondown.email/) and sign up. To set up our we only need these three environment variables: 

1. `BUTTONDOWN_API_URL`, which should be `https://api.buttondown.email/v1/` and the 
2. `BUTTONDOWN_API_KEY`. After being signed in, click the three horizontal lines button on the upper right. 

Here is a quick overview to important items in the menu:

* **Settings**
  * [Programming](https://buttondown.email/settings/programming)  is where your **API Key** (`BUTTONDOWN_API_KEY`) is found, which can be regenerated. You can also set **Webhooks**, and view **Events** and **Requests**.
  * [Your newsletter](https://buttondown.email/settings)  is where you **Newsletter name**, **Newsletter description**, and other things are set. 
  * [Account](https://buttondown.email/account)  you can set the **Your name** ('From' field in emails from you, which defaults to be the Newsletter name) and **Your address**, which is blank by default <mark>but t's a legal requirement for newsletters to contain a physical address.</mark> 
  * [Settings](https://buttondown.email/settings) is where you can change your **Username**, **Newsletter name** and **Newsletter description**, among other things.  
  * [Subscribing](https://buttondown.email/settings/subscribing) is where you can modify how people sign up (confirmation and welcome emails, etc).

Sometimes email confirmations from Buttondown are identified as spam by Gmail and possibly others. [Here is advice from Buttondown on this](https://posts.buttondown.email/2019/05/16/sending-newsletters-that-get-delivered).

### Deployment

#### Vercel  

The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#### Environment Variables on Vercel

When deploying a Next.js app to [Vercel](https://vercel.com/), all types of Environment Variables should be configured in the [Project Settings](https://vercel.com/docs/environment-variables), even Environment Variables used in Development – which can then be [downloaded onto your local device](https://vercel.com/docs/environment-variables#development-environment-variables). If you've configured [Development Environment Variables](https://vercel.com/docs/environment-variables#development-environment-variables) you can pull them into `.env.local` for use on your local machine with the following command:

```
vercel env pull .env.local
```

When using the Vercel CLI to deploy make sure you add a [`.vercelignore`](https://vercel.com/guides/prevent-uploading-sourcepaths-with-vercelignore?query=vercelignore#allowlist) that includes files that should not be uploaded, generally these are the same files included in `.gitignore`.

You may want to refer to this guide: [Deploying Next.js to Vercel with Environment Variables - YouTube](https://www.youtube.com/watch?v=lo2GmBahoyI).

If you don't see the changes to the deployed app, it's probably because you are not looking at the particular deployment that has the environmental variables loaded, even if that is the most recent one because the most recent one is not necessarily the "current" one. 

#### Netlify / GitHub Pages / Firebase etc.  

As the template uses `next/image` for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.

The API routes used in the newsletter component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the newsletter component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.

## Maintainers

[@Jeff-Russ](https://github.com/Jeff-Russ) 

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2022 Jeff Russ
