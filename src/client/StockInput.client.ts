import { Provider } from "@/model/Provider";
import { StockInput } from "@/model/StockInput";
import axios, { AxiosInstance } from "axios";

export class StockInputClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/stock-input',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(stockInput: StockInput) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, stockInput)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<StockInput[]> {
        try {
            return (await this.axiosClient.get<StockInput[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<StockInput> {
        try {
            return (await this.axiosClient.get<StockInput>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async update(stockInput: StockInput) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${stockInput.id}`, stockInput)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async disable(stockInput: StockInput) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/disable/${stockInput.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async enabled(stockInput: StockInput) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/enabled/${stockInput.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByProductInStockInput(idProduct: number) : Promise<StockInput> {
        try {
            return (await this.axiosClient.get<StockInput>(`/product/${idProduct}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findByProviderInStockInput(idProvider: number) : Promise<StockInput> {
        try {
            return (await this.axiosClient.get<StockInput>(`/provider/${idProvider}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findByActiveStockInputs() : Promise<StockInput[]> {
        try {
            return (await this.axiosClient.get<StockInput[]>(`/actives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByInactiveStockInputs() : Promise<StockInput[]> {
        try {
            return (await this.axiosClient.get<StockInput[]>(`/inactives`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}