export default eventHandler(() => {
  return [
    { id: '1', title: 'Wage', value: 4000, source: 'Cash', description: '', created_at: '2022-01-01' },
    { id: '2', title: 'Pay rent', value: -1000, source: 'House', description: 'For rent', created_at: '2022-01-02' },
    { id: '3', title: 'Buy shoes', value: -200, source: '', description: 'For work', created_at: '2022-01-03' },
    { id: '4', title: 'Buy coffee', value: -5, source: 'Cash', description: 'For lunch', created_at: '2022-01-04' },
  ]
})
