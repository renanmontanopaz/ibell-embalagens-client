import { Provider } from "@/model/Provider";
import axios, { AxiosInstance } from "axios";

export class ProviderClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://transportadora-back.onrender.com/api/provider',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(provider: Provider) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, provider)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Provider[]> {
        try {
            return (await this.axiosClient.get<Provider[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Provider> {
        try {
            return (await this.axiosClient.get<Provider>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async update(provider: Provider) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${provider.id}`, provider)).data
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

    public async enabled(id: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/enabled/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByActiveProviders() : Promise<Provider[]> {
        try {
            return (await this.axiosClient.get<Provider[]>(`/actives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByInactiveProviders() : Promise<Provider[]> {
        try {
            return (await this.axiosClient.get<Provider[]>(`/inactives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}