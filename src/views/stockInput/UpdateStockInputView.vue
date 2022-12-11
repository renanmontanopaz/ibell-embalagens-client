<template>
    <div class="columnsCadastrar">
        <h1>EDITAR ENTRADA DE ESTOQUE</h1>
        <div class="field is-grouped">
            <div class="control">
                <div class="select is-fullwidth">
                    <select v-model ="stockInput.product">
                        <option value="undefined" disabled hidden>Selecione o Produto</option>
                        <option :value="item" 
                            v-for= "item in productList" :key="item.id"> {{ item.productName }} </option>
                    </select>
                </div>
            </div>
            <div class="control">
                <div class="select is-fullwidth">
                    <select v-model ="stockInput.provider">
                        <option value="undefined" disabled hidden>Selecione o Fornecedor</option>
                        <option :value="item" 
                            v-for= "item in providerList" :key="item.id"> {{ item.name }} </option>
                    </select>
                </div>
            </div>
        </div>
        <!-- <div class="field is-grouped">
            <div class="control">
                <label>Valor de Custo</label>
                <input class="input" type="number" v-model="stockInput.costValue" placeholder="Valor de Custo">
            </div>
            <div class="control">
                <label>Quantidade de Entrada</label>
                <input class="input" type="number" v-model="stockInput.inputQuantity" placeholder="Quantidade de Entrada">
            </div>
        </div> -->
        <div class="field is-grouped">
            <div class="control">
                <label>Observação</label>
                <textarea class="textarea" v-model="stockInput.observation" placeholder="Observação"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Data de Entrada</label>
                <input class="input" type="datetime-local" v-model="stockInput.dateEntry" placeholder="Data de Entrada">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <router-link to="/stock-input"><button class="button is-link is-light">Voltar</button></router-link>
            </div>
            <div class="control">
                <button @click="onClickCadastrar()" class="button is-success is-focused">Salvar</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .columnsCadastrar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        h1 {
            font-size: 36px;
            color: black;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .textarea {
            width: 400px;
            max-height: 200px;
        }

        label {
            color: black;
            font-weight: 700;
        }
    }
</style>

<script lang="ts">
    import { ProductClient } from '@/client/Product.client'
    import { ProviderClient } from '@/client/Provider.client'
    import { StockInputClient } from '@/client/StockInput.client'
    import { Product } from '@/model/Product'
    import { Provider } from '@/model/Provider'
    import { StockInput } from '@/model/StockInput'
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class UpdateStockInputView extends Vue {

        private stockInputClient: StockInputClient = new StockInputClient()
        private productClient: ProductClient = new ProductClient()
        private providerClient: ProviderClient = new ProviderClient()

        public stockInput: StockInput = new StockInput()

        public providerList: Provider[] = []
        public productList: Product[] = []

        private id = Number(this.$route.params.id)

        public mounted(): void {
            this.selectProductList()
            this.selectProviderList()
            this.getStockInput()
        }

        private getStockInput(): void {
            this.stockInputClient.findById(this.id).then(
                success => {
                    this.stockInput = success
                },
                error => console.log(error)
            )
        }

        public onClickCadastrar(): void {
            
            this.stockInputClient.save(this.stockInput).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.stockInput = new StockInput()
                },
                error => {
                    console.log(error)
                }
            )
        }

        private selectProductList(): void {
            this.productClient.findByActiveProducts().then(
                success => this.productList = success,
                error => console.log(error)
            )
        }

        private selectProviderList(): void {
            this.providerClient.findByActiveProviders().then(
                success => this.providerList = success,
                error => console.log(error)
            )
        }
    }
</script>