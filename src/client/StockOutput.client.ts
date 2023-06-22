import { StockOutput } from "@/model/StockOutput";
import axios, { AxiosInstance } from "axios";

export class StockOutputClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://transportadora-back.onrender.com/api/stock-output',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(stockOutput: StockOutput) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, stockOutput)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<StockOutput[]> {
        try {
            return (await this.axiosClient.get<StockOutput[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<StockOutput> {
        try {
            return (await this.axiosClient.get<StockOutput>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async update(stockOutput: StockOutput) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${stockOutput.id}`, stockOutput)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async disable(stockOutput: StockOutput) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/disable/${stockOutput.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async enabled(stockOutput: StockOutput) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/enabled/${stockOutput.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByProductInStockOutput(idProduct: number) : Promise<StockOutput> {
        try {
            return (await this.axiosClient.get<StockOutput>(`/product/${idProduct}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findByClientInStockOutput(idClient: number) : Promise<StockOutput> {
        try {
            return (await this.axiosClient.get<StockOutput>(`/client/${idClient}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findByActiveStockOutputs() : Promise<StockOutput[]> {
        try {
            return (await this.axiosClient.get<StockOutput[]>(`/actives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByInactiveStockOutputs() : Promise<StockOutput[]> {
        try {
            return (await this.axiosClient.get<StockOutput[]>(`/inactives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}