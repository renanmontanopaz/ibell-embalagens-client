import axios from 'axios';
import { Client } from '@/model/Client';
import {ClientClient} from "@/client/Client.client";
import MockAdapter from 'axios-mock-adapter';
describe('ClientClient', () => {
    let clientClient: ClientClient;
    let mockAxios: MockAdapter;

    beforeEach(() => {
        clientClient = new ClientClient();
        mockAxios = new MockAdapter(axios);
    });

    afterEach(() => {
        mockAxios.restore();
    });

    it('deve salvar um cliente', async () => {
        const client: Client = { id: 1, name: 'Test Client' } as Client;
        mockAxios.onPost('/api/client').reply(200);

        await clientClient.save(client);

        expect(mockAxios.history.post.length).toBe(1);
        expect(mockAxios.history.post[0].data).toBe(JSON.stringify(client));
    });

    // Adicione testes para os outros métodos (listAll, findById, update, etc.)
});