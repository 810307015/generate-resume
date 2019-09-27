export const increment = (data = 1) => ({
  type: 'INCREMENT',
  data: data
})

export const decrement = (data = 1) => ({
  type: 'DECREMENT',
  data: data
})