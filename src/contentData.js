const contentData = [
  {
    title: "Temperature",
    dataSource: "https://en.wikipedia.org/wiki/Climate_change",
    textContent:
      "Surface temperatures are rising by about 0.2 °C per decade,with 2020 reaching a temperature of 1.2 °C above the pre-industrial era.Since1950, the number of cold days and nights has decreased, and the number of warm days and nights has increased.",
    link: "/temperature",
    cssClass: "temperature",
  },
  {
    title: "Carbon Dioxide",
    dataSource:
      "https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide",
    textContent:
      "Since the middle of the 20th century, annual emissions from burning fossil fuels have increased every decade, from an average of 3 billion tons of carbon (11 billion tons of carbon dioxide) a year in the 1960s to 9.5 billion tons of carbon (35 billion tons of carbon dioxide) per year in the 2010s",
    link: "/carbon-dioxide",
    cssClass: "carbonDioxide",
  },
  {
    title: "Methane",
    dataSource:
      "https://www.edf.org/climate/methane-crucial-opportunity-climate-fight",
    textContent:
      "Methane has more than 80 times the warming power of carbon dioxide over the first 20 years after it reaches the atmosphere. Even though CO2 has a longer-lasting effect, methane sets the pace for warming in the near term. At least 25% of today’s global warming is driven by methane from human actions.",
    link: "/methane",
    cssClass: "methane",
  },
  {
    title: "Nitrous Oxide",
    dataSource: "https://www.epa.gov/ghgemissions/overview-greenhouse-gases",
    textContent:
      "The impact of 1 pound of N2O on warming the atmosphere is almost 300 times that of 1 pound of carbon dioxide.Globally, about 40% of total N2O emissions come from human activities. Nitrous oxide is emitted from agriculture, land use, transportation, industry, and other activities, described below.",
    link: "/nitrous-oxide",
    cssClass: "nitrousOxide",
  },
  {
    title: "Polar Ice",
    dataSource:
      "https://www.worldwildlife.org/pages/six-ways-loss-of-arctic-ice-impacts-everyone",
    textContent:
      "Polar ice caps are melting as global warming causes climate change. We lose Arctic sea ice at a rate of almost 13% per decade, and over the past 30 years, the oldest and thickest ice in the Arctic has declined by a stunning 95%. If emissions continue to rise unchecked, the Arctic could be ice-free in the summer by 2040.",
    link: "/polar-ice",
    cssClass: "polarIce",
  },
];

const quotations = [
  {
    quotation:
      "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    author: "Dr. Jane Goodall",
  },
  {
    quotation:
      "Climate change isn't something people get to choose to believe or not: it's happening.",
    author: "Matt Gaetz",
  },
  {
    quotation: "When the well is dry, we know the worth of water.",
    author: "Benjamin Franklin",
  },
  {
    quotation:
      "Preservation of our environment is not a liberal or conservative challenge, it's common sense.",
    author: "Ronald Reagan",
  },
  {
    quotation:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    quotation:
      "Earth provides enough to satisfy every man's need, but not every man's greed.",
    author: "Mahatma Gandhi",
  },
];

export { contentData, quotations };
