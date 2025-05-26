---
layout: page
title: projects
permalink: /projects/
order: 3
---

<section class="content-box" markdown="0">

<h3> Graduation theses </h3>
{% capture theses %}
{% include theses.html %} 
{% endcapture %}
{{ theses | replace: '    ', ''}}

</section>

<section class="content-box" markdown="0">

<h3> Academic projects </h3>
{% capture projects-acad %}
{% include projects-acad.html %} 
{% endcapture %}
{{ projects-acad | replace: '    ', ''}}

</section>

<section class="content-box" markdown="0">

<h3> Personal/extracurricular projects </h3>
{% capture projects-pers %}
{% include projects-pers.html %} 
{% endcapture %}
{{ projects-pers | replace: '    ', ''}}

</section>
