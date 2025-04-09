import { Administrator } from "@/model/Administrator";
import axios, { AxiosInstance } from "axios";

export class AdministratorClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: '/api/administrator',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(administrator: Administrator) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, administrator)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Administrator[]> {
        try {
            return (await this.axiosClient.get<Administrator[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Administrator> {
        try {
            return (await this.axiosClient.get<Administrator>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async update(administrator: Administrator) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${administrator.id}`, administrator)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async disable(administrator: Administrator) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/disable/${administrator.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async enabled(administrator: Administrator) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/enabled/${administrator.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByActiveAdm() : Promise<Administrator[]> {
        try {
            return (await this.axiosClient.get<Administrator[]>(`/actives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByInactiveAdm() : Promise<Administrator[]> {
        try {
            return (await this.axiosClient.get<Administrator[]>(`/inactives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}