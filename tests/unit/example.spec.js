import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'message';
    
    const wrapper = shallowMount(HelloWorld, {
      mocks: {
        //$t: () => '自訂string'
        $t: (key) => key //i18n key
      },
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
