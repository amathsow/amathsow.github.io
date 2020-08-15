# The IRL Lab Personnel Website

This website is powered by Jekyll and styled with Bootstrap 4 based on the Journal theme by Bootswatch.com.

Here is a quick guide on how to add/edit the content of this website.

## Personalization
First of all, click on **Use this template** button to create a new repository based on this repository.
If this repository is not listed in available templates, you can instead fork it by clicking the Fork button on the header section of Github page.
If you don't see a fork button, try [duplicating this repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository).

All the following changes should be done ON YOUR FORK not the original generic repository.
From time to time, you can update your fork to get the latest features by doing a pull from the main repository.  

Then edit [`_config.yml`](_config.yml) file and enter your information under `Author settings` section.

You should also modify `Site settings` and set `url` and optionally `baseurl` according to your deployment (such as Github pages).

## News
News (aka. updates) are Jekyll posts and reside in [`news/_posts`](news/_posts) folder.
There is one Markdown or HTML file for each news entry. Files should be named in the following format:
```
YEAR-MONTH-DAY-title.MARKUP
```
Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension
representing the format used in the file (`md` or `html`). For example, the following are examples of valid post filenames:
```
2020-08-01-sample-title.md
2020-08-10-another-example.md
```
You can define a `title` for each post. Post titles are shown only in News page and not in the homepage's sidebar. 
News content (aka. post content) can be short or long, include images, tables, etc. However, we only show an excerpt
from the content on the homepage. You can set the excerpt by defining `excerpt` property in post front matter,
or by putting `<!--more-->` anywhere in post content. The content up to `<!--more-->` is considered as the post excerpt.

All news will be shown on the homepage by default.
You may want to hide a news post from the homepage by setting `featured: false` in its Markdown/HTML file.
If no posts defined as a featured news, the News widget on the homepage won't be shown. 
  
For more information on posts, please consult [Jekyll documentation](https://jekyllrb.com/docs/posts/). Please note
that we don't have a specific page for each post. We show posts excerpt in the homepage's sidebar, and their
full content in **News** page (`/news/`).


## Courses
If you're doing a lecture or a TAship, you may want to list your courses on the homepage.
Make a new file in [`_courses`](_courses) folder for each course you're teaching or thought previously.
It can be a Markdown or an HTML file.

Put the following front matter at the beginning of your file:

```
---
title: "CMPUT 6xx: COURSE TITLE"
semester: Fall 202x
institute: University of Alberta
---
```

File name could be anything you like, and it's used to create the permalink for course page;
unless you explicitly set `permalink` in the front matter.

Put the following code snippet where you want to display the list of courses:
```
{% include courses.html %}
```


## Modifications
It is highly recommended that every change is proposed through pull requests and carefully reviewed before merging into the master branch.
If you are not familiar with git and Github, please read the [10-minute introduction to Git and Github](https://guides.github.com/introduction/git-handbook/) first.


## Local Development
If you want to run this website locally and see changes before pushing to Git repository,
you need to set up a Jekyll 4 development environment. Please see [Jekyll official installation guide](https://jekyllrb.com/docs/installation/).


## Further Reading
 - [Jekyll documentation on website content](https://jekyllrb.com/docs/pages/)
 - [YAML Tutorial: Everything You Need to Get Started in Minutes](https://rollout.io/blog/yaml-tutorial-everything-you-need-get-started/)
 - [Hello World - GitHub Guides](https://guides.github.com/activities/hello-world/)
 - [Git Handbook - Github Guides](https://guides.github.com/introduction/git-handbook/)


## Credits
Developed and deployed by [Mohammad-Reza Daliri](https://mrdaliri.com) in July 2020
for The Intelligent Robot Learning Lab, University of Alberta, Canada.


## License
Until further notice, it is considered a closed-source project and shall not be shared with non-lab members.
