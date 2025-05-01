import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/components/MyComponent.vue';
import axios from 'axios';

jest.mock('axios'); // Mock the entire axios module

describe('MyComponent.vue', () => {
    it('fetches data correctly', async () => {
        const mockResponse = { data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] };
        (axios.get as jest.Mock).mockResolvedValue(mockResponse); // Mock axios.get

        const wrapper = shallowMount(MyComponent);
        await wrapper.vm.$nextTick(); // Wait for the component to update

        expect(wrapper.vm.items).toEqual(mockResponse.data); // Assert the data
        expect(axios.get).toHaveBeenCalledTimes(1); // Assert axios.get was called
        expect(axios.get).toHaveBeenCalledWith('/api/items'); // Assert correct URL
    });
});