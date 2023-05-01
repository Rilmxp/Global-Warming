# Global Warming

**Link to website:** https://rilmxp-global-warming.netlify.app/

Global Warming is a ReactJs single page web application that fetches data from different APIs to create and render charts. These charts display evolving data of certain factors that have a deep impact on the environment and/or contribute to increase the greenhouse effect.

HTTP requests for charts are made to **Global Warming and Climate Change API** at https://global-warming.org/api

---

</br>

## Index of contents

1. [Description](#description)
2. [Behavior](#behavior)
   - [Home](#home)
   - [Factor Pages](#factor-pages)
   - [Error Page](#error-page)
3. [Technologies / libraries / external resources](#technologies)
   - [ReactJs](#react)
   - [Recharts](#recharts)
   - [Axios](#axios)
   - [React Query](#react-query)
   - [Framer Motion](#framer-motion)
   - [Css](#css)
   - [Other libraries](#other-libraries)
4. [Responsiveness](#responsiveness)

---

</br>

<a name="description"></a>

## Description

The website consists of seven different routes to components that represent "pages". </br>
All data displayed inside the charts is fetched directly from the APIs. </br>
All data displayed outside the charts is retrieved from a local file at src/data/contentData.js </br>

Each factor page consists of a chart and a list of causes, effects, and improvements to be made("What you can do"), regarding that particular factor.

1. **Home**: A banner displaying a carousel of famous quotations regarding commitment to change, importance of education and climate change. An introductory summary of the current status of factors that have a deep impact on the environment.

2. **Temperature**: chart displaying celsius anomalies through the years.

3. **Carbon dioxide**: chart displaying carbon dioxide levels.

4. **Methane**: chart displaying methane levels.

5. **Nitrous oxide**: chart displaying nitrous oxide levels.

6. **Polar ice**: chart displaying ice land extent in million square kilometers.

7. **Error Page**: to be displayed whenever the user inserts invalid route information directly on the url.

---

</br>

<a name="behavior"></a>

## Behavior

<a name="navbar"></a>

### Navbar

- Brand/Logo link to Home.
- Links to all global warming factors.
- Horizonal inline display of links on wide screens. Vertical canvas on narrow screens.

<a name="home"></a>

### Home

On page load, it retrieves data from local file at src/data/contentData.js to feed the Factors section.

- **Banner**

  - Main heading containing a responsive image and a carousel of quotations.
    </br></br>

- **Factors section**

  - Each factor consists of a summary of its current status and a button that links to its dedicated page.
  - To be rendered through animation only when the element enters the viewport.

<a name="factor-pages"></a>

### Factor Pages

- **Chart**

  - On page load, data will be fetched from its corresponding factor API and a chart will be rendered.

  - In cases of huge amount of data, the same has been reduced in favor of a nicer/cleaner display. As an example, temperature data has been reduced to 1 value every ten years from 1880 until 1980, and annually from 1981 to present.

  - Linear, Area and Bar charts have been used to represent the data recieved.

  - On hover, a tooltip will be displayed to provide an easier reading of data.

  - In case of Error, a feedback message will be displayed.

- **Facts Section**

  - They consist of a list of "Causes", "Effects", and "What you can do" guidelines.
  - Data is retrieved from local file at src/data/contentData.js.

<a name="error-page"></a>

### Error Page

Whenever the user manually inserts invalid data on the url, they will be redirected to the error page which consists of a background picture (the same used for the banner), and a button to go back to home.

---

</br>

<a name="technologies"></a>

## Technologies / libraries / external resources

<a name="react"></a>

### ReactJs

- Application created with ViteJs.

- **State management.**

  - No global state context setup was necessary for this app.
  - Charts state is managed internally by Recharts library.
  - Animations state is managed internally by framer motion library.
  - Asynchronous state is managed by React Query.
  - Bootstrap's Navbar state has been manually modified to close canvas after clicking on links.
    </br> </br>

- **Components.** They can be found inside the `features` folder with the exception of page components which are located in their dedicated folder named `pages`.

- **Folders and file structure**.

  - `features` folder has been divided into different categories to reduce clutter. Each folder has an `index.js` which imports and exports in only one place all the components from that specific feature. As an example, chart components for each factor will be found in the `charts` folder and, navbar and footer in the `layout` folder.

  - `data` folder contains `contentData.js` file with static data to feed `FactorsContainer.jsx` and `FactsContainer.jsx` and `TextCarousel.jsx` (quotations).

  - `styles` folder contains minimum common configuration sass files as most styles have been set using css modules.

  - `api` folder contains axios base configuration for async calls on `graphDataApiConfig.js` and functions to handle API responses for each chart on `graphDataResponseHandlers.js`

</br>
<a name="recharts"></a>

### Recharts

- Used for creation of charts.

</br>
<a name="axios"></a>

### Axios

- Used for HTTP requests. Its base configuration can be found in `graphDataApiConfig.js` inside the `api` folder

</br>
<a name="react-query"></a>

### React query

- Used for asynchronous state management of HTTP requests.

</br>
<a name="framer-motion"></a>

### Framer Motion

- Used for fade-in of page transitions and charts, scale-in of factors, spring-in of facts, and elements' display on entereing the viewport.

</br>
<a name="css"></a>

### Css/Sass/Css Modules

- Three sass partials have been created. `_config.scss` for basic global styles. `_custom-bootstrap` to modify some bootstrap defaults. `_exports.module.scss` which is needed in chart components for &lt;defs&gt; and tooltip inline styles as per Recharts specifications since classes will simply not work.

- Apart from that, most of the styles have been defined in Css modules adjacent to each corresponding component.

</br>
<a name="other-libraries"></a>

### Other libraries

- **React-Icons.** Github, briefcase, lightbulb, thermometer and magnifying glass.

- **Nanoid.** To create ids for react lists internal indexing.

- **React-router-dom.** To route to different page-like components.

- **React Bootstrap.** Used for navigation bar.

---

</br>

<a name="responsiveness"></a>

## Responsiveness

- the responsive nature of each component has been set directly on their own css module.

- Banner responsive image by changing url value from background-image property.

- **Responsive elements:**

  - Width and height of Graph Container.
  - Width of Facts container below charts.
  - Width of Factors container on homepage.
