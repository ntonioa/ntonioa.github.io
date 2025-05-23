---
layout: page
title: projects
permalink: /projects/
order: 3
---

<section class="content-box">

## Personal projects
{% capture projects-pers %}
{% include projects-pers.html %} 
{% endcapture %}
{{ projects-pers | replace: '    ', ''}}

</section>

<section class="content-box" markdown="1">

## Academic projects
{% capture projects-acad %}
{% include projects-acad.html %} 
{% endcapture %}
{{ projects-acad | replace: '    ', ''}}

</section>
