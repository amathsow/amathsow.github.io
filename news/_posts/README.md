News (aka. updates) are Jekyll posts and reside in this folder.
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
