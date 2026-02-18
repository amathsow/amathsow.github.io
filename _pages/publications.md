---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% assign sorted_publications = site.publications | sort: 'date' | reverse %}
{% assign publications_by_year = sorted_publications | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign sorted_years = publications_by_year | sort: 'name' | reverse %}

{% for year_group in sorted_years %}
  <h2 id="{{ year_group.name | slugify }}">{{ year_group.name }}</h2>
  <ul>
  {% assign year_sorted = year_group.items | sort: 'date' | reverse %}
  {% for post in year_sorted %}
    <li>
      {% include archive-single-publication.html %}
    </li>
  {% endfor %}
  </ul>
{% endfor %}

