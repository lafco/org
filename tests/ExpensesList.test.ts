import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExpensesList from '@/components/ExpensesList.vue'

describe('ExpensesList Component', () => {
  it('Renders', () => {
    const wrapper = mount(ExpensesList)
    expect(wrapper.html()).toContain('Expenses')
  })
  it('', () => {
    const wrapper = mount(ExpensesList)
    expect(wrapper.html()).toContain('Expenses')
  })
})
