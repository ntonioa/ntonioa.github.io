---
layout: page
title: projects
permalink: /projects/
order: 3
description: "Theses, academic projects, and personal work in robotics, control systems, UAVs, and embedded electronics by Antonio Rapuano."
---

<section class="content-box" markdown="0">
<div class="section-head"><h3>Graduation Theses</h3></div>
{% capture theses %}
{% include theses.html %} 
{% endcapture %}
{{ theses | replace: '    ', ''}}
</section>

<section class="content-box" markdown="0">
<div class="section-head"><h3>Academic Projects</h3></div>
{% capture projects-acad %}
{% include projects-acad.html %} 
{% endcapture %}
{{ projects-acad | replace: '    ', ''}}
</section>

<section class="content-box" markdown="0">
<div class="section-head"><h3>Personal &amp; Extracurricular</h3></div>
{% capture projects-pers %}
{% include projects-pers.html %} 
{% endcapture %}
{{ projects-pers | replace: '    ', ''}}
</section>
