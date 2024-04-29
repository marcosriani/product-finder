export const filterOptions = {
  strategy: [
    { id: 'id1', value: 'thematic', label: 'Thematic' },
    { id: 'id2', value: 'factors', label: 'Factors' },
    { id: 'id3', value: 'equity-income', label: 'Equity Income' },
    { id: 'id4', value: 'capital-strength', label: 'Capital Strength' },
    { id: 'id5', value: 'currency-hedge', label: 'Currency Hedge' },
    { id: 'id6', value: 'esg', label: 'ESG' },
  ],
  'asset class': [
    {
      group: 'equity',
      options: [
        { id: 'id7', value: 'all-cap', label: 'All Cap' },
        { id: 'id8', value: 'large-cap', label: 'Large Cap' },
        { id: 'id9', value: 'small-cap', label: 'Small Cap' },
      ],
    },
    {
      group: 'fixed income',
      options: [
        { id: 'id10', value: 'government', label: 'Government' },
        { id: 'id11', value: 'currency', label: 'Currency' },
      ],
    },
  ],
  'market & region': [
    {
      group: 'market',
      options: [
        { id: 'id12', value: 'developed', label: 'Developed' },
        { id: 'id13', value: 'emerging', label: 'Emerging' },
      ],
    },
    {
      group: 'region',
      options: [
        { id: 'id14', value: 'asia-pacific', label: 'Asia Pacific' },
        {
          id: 'id15',
          value: 'europe',
          label: 'Europe',
          options: [
            {
              id: 'id16',
              value: 'eurozone',
              label: 'Eurozone',
              tags: ['europe', 'developed'],
            },
            {
              id: 'id17',
              value: 'germany',
              label: 'Germany',
              tags: ['europe', 'developed'],
            },
            {
              id: 'id18',
              value: 'switzerland',
              label: 'Switzerland',
              tags: ['europe', 'developed'],
            },
            {
              id: 'id19',
              value: 'united-kingdom',
              label: 'United Kingdom',
              tags: ['europe', 'developed'],
            },
          ],
        },
        { id: 'id20', value: 'global', label: 'Global' },
        {
          id: 'id21',
          value: 'north-america',
          label: 'North America',
          options: [
            {
              id: 'id22',
              value: 'united-states',
              label: 'United States',
              tags: ['north-america', 'developed'],
            },
          ],
        },
      ],
    },
  ],
  style: [
    { id: 'id23', value: 'index', label: 'Index' },
    { id: 'id24', value: 'active', label: 'Active' },
  ],
};
