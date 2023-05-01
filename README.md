https://global-warming.org/

Temperature - https://global-warming.org/api/temperature-api
carbon dioxide - https://global-warming.org/api/co2-api
Methane - https://global-warming.org/api/methane-api
Nitrous Oxide - https://global-warming.org/api/nitrous-oxide-api
Polar ice - https://global-warming.org/api/arctic-api

created with vite

# Global Warming

**Link to website:** https://rilmxp-global-warming.netlify.app/

Global Warming is a ReactJs single page web application that fetches data from different APIs to create and render charts. These charts display evolving data of certain factors that have a deep impact on the environment and/or contribute to increase the greenhouse effect.

HTTP requests for charts are made to **Global Warming and Climate Change API** at https://global-warming.org/api

## Description

The website consists of seven different routes to components that represent "pages".
All data displayed inside the charts is fetched directly from the APIs
All data displayed outside the charts is fetched from a local file at src/data/contentData.js

Each factor page consists of a chart and a list of causes, effects, and improvements to be made regarding that particular factor.

1. **Home**: A banner displaying a carousel of famous quotations regarding commitment to change, importance of education and climate change. An introductory summary of the current status of factors that have a deep impact on the environment.

2. **Temperature**: chart displaying celsius anomalies through the years.

3. **Carbon dioxide**: chart displaying carbon dioxide levels.

4. **Methane**: chart displaying carbon dioxide levels.

5. **Nitrous oxide**: chart displaying carbon dioxide levels.

6. **Polar ice**: chart displaying ice extent land in million square kilometers..

7. **Error Page**: displayed whenever the user inserts invalid route information directly on the url.
