---
layout: page
title: about
permalink: /about/
order: 2
---

<section class="content-box" markdown="0">
<h3 style="text-align: center"> Experience </h3>
{% capture experience %}
{% include experience.html %} 
{% endcapture %}
{{ experience | replace: '    ', ''}}
</section>

<section class="content-box">
<h3 style="text-align: center"> Education </h3>
{% capture education %}
{% include education.html %} 
{% endcapture %}
{{ education | replace: '    ', ''}}
</section>

<section class="content-box">
<h3 style="text-align: center"> Skills </h3>
{% capture skills %}
{% include skills.html %} 
{% endcapture %}
{{ skills | replace: '    ', ''}}
</section>

<section class="content-box">
<h3 style="text-align: center"> Languages </h3>
{% capture languages %}
{% include languages.html %} 
{% endcapture %}
{{ languages | replace: '    ', ''}}
</section>

<section class="content-box">
  <h3 style="text-align: center">Other interests</h3>
</section>
