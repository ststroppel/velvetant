export const exampleProjects = [
  {
    id: 'proj_1',
    label: 'Project xy',
    activities: [
      {
        id: 'act_1',
        label: 'Development',
        billable: true
      }
    ]
  },
  {
    id: 'proj_2',
    label: 'Example Company',
    activities: [
      {
        id: 'act_2',
        label: 'Development',
        billable: true
      },
      {
        id: 'act_3',
        label: 'Presales',
        billable: false
      }
    ]
  }
];

export const exampleCalendarData = [
  {
    id: 1,
    day: '2021-02-01',
    events: [
      {
        id: '1342232',
        actId: 'act_2',
        times: [
          { start: 1612166400000, end: 1612173600000, notes: 'test \n test' },
          { start: 1612188000000, end: 1612189800000, notes: 'meeting' }
        ]
      }
    ]
  }
];
