---
layout: page
title: about
permalink: /about/
order: 2
description: "Background, experience, education, skills, and languages of Antonio Rapuano — control engineer and robotics researcher."
---

<section class="content-box">
<div class="section-head"><h3>Profile</h3></div>
{% capture profile %}
{% include profile.html %} 
{% endcapture %}
{{ profile | replace: '    ', ''}}
</section>

<section class="content-box" markdown="0">
<div class="section-head"><h3>Experience</h3></div>
{% capture experience %}
{% include experience.html %} 
{% endcapture %}
{{ experience | replace: '    ', ''}}
</section>

<section class="content-box">
<div class="section-head"><h3>Education</h3></div>
{% capture education %}
{% include education.html %} 
{% endcapture %}
{{ education | replace: '    ', ''}}
</section>

<section class="content-box">
<div class="section-head"><h3>Skills</h3></div>
{% capture skills %}
{% include skills.html %} 
{% endcapture %}
{{ skills | replace: '    ', ''}}
</section>

<section class="content-box">
<div class="section-head"><h3>Languages</h3></div>
{% capture languages %}
{% include languages.html %} 
{% endcapture %}
{{ languages | replace: '    ', ''}}
</section>

{% capture exams %}
{% include exams.html %} 
{% endcapture %}
{{ exams | replace: '    ', ''}}
