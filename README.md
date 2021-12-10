# Next.js Markdown Journal

<!-- ![banner](img/banner.png) -->

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

This is a collection of markdown-based personal website templates suitable for any individual comfortable editing their content in markdown files without the aid of interface for doing so build into the website itself. The content of each post may be a blog posts, journal entries, documentation, tutorials, news articles, resumes or really any kind of content one can eke out of markdown files. 

All branches beside those starting with `dev` and `exp` are complete builds. Each differs in complexity so you can use whichever has no more than what you need. Checkout each of these branches and determine which suits your needs. See the [ABOUT.md](ABOUT.md) for information on this particular branch.

All branches are build in [Next.js](https://nextjs.org/) and thus can be used to generate a content for a static website or deployed as is. 

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Tips and Tricks](#tips-and-tricks)

- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

This project uses [node](http://nodejs.org/) and [npm](https://npmjs.com/), which must be locally installed, along with [git](https://github.com/git-guides/install-git).

```sh
git clone https://github.com/Jeff-Russ/next-markdown-journal.git
cd next-markdown-journal
npm install
```

## Usage

All branches beside those starting with `dev` and `exp` are complete builds. Each differs in complexity so you can use whichever has no more than what you need. Checkout each of these branches and determine which suits your needs. Running `git branch` alone will only show you `main`, the only branch you get locally from `git clone` but you can see all of them with this:

```sh
git branch -a
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
  remotes/origin/static_blog_with_nextjs_and_markdown
# ... and possibly more ...
```

You can take a quick peek at an upstream branch or work on the branch locally with one of the two following commands, respectively:

```sh
git checkout origin/static_blog_with_nextjs_and_markdown # to take a quick peak
# OR
git checkout static_blog_with_nextjs_and_markdown # to keep it locally
```

You can run the app like so:

```sh
npm run dev
# OR
yarn dev
```

If you have changes that might be of use to others, PRs are accepted. But if you want to make changes and deploy for the app for your own personal, I'd recommend, from the  branch you want to start with, deleting the git tracking, then creating your own. 

```sh
rm -rf .git
git init
```

This may not be necessary for you unless you are using hosting that is deployed via `git` commands such as [Heroku](https://devcenter.heroku.com/articles/git) because it's best, if not required, that the branch you push to deployment is the `main` or `master` branch. Running the above commands makes the local code become the `main` branch.

### Managing Content

All markdown files should be kept in the  `posts/` directory.  All files with the `.md` extension will be served by the site with URL path ending with the filename (without extension) both in development  (`npm run dev`) and deployment.  The only markdown files to be served in deployment are those with the `.md` extension but in development, files with `.mdown` are also served. 

These `.mdown` files are also not ignored by `.gitignore` (`.md` are ignored) and thus can be used for testing. 

A convenient way to deactivate a post from public view, such as in deployment, is by changing the file extension to some other common markdown extension such as `.markdown` (which are ignored in `.gitignore`).

> BEWARE: Take care not to have to have multiple markdown files with the filename but different extension. You will get undefined and possibly undesirable results. 

> BEWARE: .png and .jpg are ignored via .gitignore in order to use git tracking for the project but not the instance (one's own website). Files will .jpeg are not ignored as they are used for demonstration purposes.  


## Maintainers

[@Jeff-Russ](https://github.com/Jeff-Russ)

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2021 Jeff Russ
