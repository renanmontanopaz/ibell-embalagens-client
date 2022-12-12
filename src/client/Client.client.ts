import { Client } from "@/model/Client";
import axios, { AxiosInstance } from "axios";

export class ClientClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/client',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(client: Client) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, client)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Client[]> {
        try {
            return (await this.axiosClient.get<Client[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Client> {
        try {
            return (await this.axiosClient.get<Client>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async update(client: Client) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${client.id}`, client)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async disable(id: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/disable/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async enabled(client: Client) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/enabled/${client.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByActiveClients() : Promise<Client[]> {
        try {
            return (await this.axiosClient.get<Client[]>(`/actives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByInactiveClients() : Promise<Client[]> {
        try {
            return (await this.axiosClient.get<Client[]>(`/inactives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}