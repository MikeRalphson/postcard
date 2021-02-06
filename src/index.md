# Claire & Mikey's Lockdown Tour 2021

Welcome to Claire & Mikey's lockdown # 3 virtual tour!

{% for postcard in postcards %}
  * [{{ postcard.location}} on {{ postcard.date }}](./cards/{{ postcard.location | slug }})
{% endfor %}

