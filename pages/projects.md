---
layout: page
title: projects
permalink: /projects/
order: 3
---

<section class="content-box" markdown="1">

### Graduation theses
{% capture theses %}
{% include theses.html %} 
{% endcapture %}
{{ theses | replace: '    ', ''}}

</section>

<section class="content-box" markdown="1">

### Academic projects
{% capture projects-acad %}
{% include projects-acad.html %} 
{% endcapture %}
{{ projects-acad | replace: '    ', ''}}

</section>

<section class="content-box">

### Personal/extracurricular projects
{% capture projects-pers %}
{% include projects-pers.html %} 
{% endcapture %}
{{ projects-pers | replace: '    ', ''}}

</section>
