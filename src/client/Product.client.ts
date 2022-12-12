import { Product } from "@/model/Product";
import axios, { AxiosInstance } from "axios";

export class ProductClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/product',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(product: Product) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, product)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Product[]> {
        try {
            return (await this.axiosClient.get<Product[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Product> {
        try {
            return (await this.axiosClient.get<Product>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async update(product: Product) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${product.id}`, product)).data
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

    public async findByActiveProducts() : Promise<Product[]> {
        try {
            return (await this.axiosClient.get<Product[]>(`/actives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByInactiveProducts() : Promise<Product[]> {
        try {
            return (await this.axiosClient.get<Product[]>(`/inactives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}