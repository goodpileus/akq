---
layout: photos
title:  "photos"
order: 0
category: ignore
slug: photos
permalink: :slug
---

{% for image in site.static_files %}
  {% if image.path contains 'img/photos/2022' %}
  <div class="item">
    <img id="{{ image.basename }}" src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.path }}" title="{{ image.basename }}">
  </div>
  {% endif %}
{% endfor %}


<style>
  html {
    background:darkgray;
    color:white;
  }
  nav {
    background:darkgray;
  }
</style>

