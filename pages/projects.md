---
layout: page
title: projects
permalink: /projects/
order: 3
description: "Theses, academic projects, and personal work in robotics, control systems, UAVs, and embedded electronics by Antonio Rapuano."
---

<section class="content-box" markdown="0">

<h3 style="text-align: center"> Graduation theses </h3>
{% capture theses %}
{% include theses.html %} 
{% endcapture %}
{{ theses | replace: '    ', ''}}

</section>

<section class="content-box" markdown="0">

<h3 style="text-align: center"> Academic projects </h3>
{% capture projects-acad %}
{% include projects-acad.html %} 
{% endcapture %}
{{ projects-acad | replace: '    ', ''}}

</section>

<section class="content-box" markdown="0">

<h3 style="text-align: center"> Personal/extracurricular projects </h3>
{% capture projects-pers %}
{% include projects-pers.html %} 
{% endcapture %}
{{ projects-pers | replace: '    ', ''}}

</section>
