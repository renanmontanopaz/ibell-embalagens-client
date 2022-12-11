<template>
    <div class="columnsCadastrar">
        <h1>EDITAR PRODUTO</h1>
        <div class="field is-grouped">
            <div class="control">
                <label>Código</label>
                <input class="input" type="number" v-model="product.code" placeholder="Código">
            </div>
            <div class="control">
                <label>Nome</label>
                <input class="input" type="text" v-model="product.productName" placeholder="Nome">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <div class="select is-fullwidth">
                    
                    <select v-model="product.unitMeasure">
                        <option value="undefined" disabled hidden>Unidade de Medida</option>
                        <option value="UNIDADE">Unidade</option>
                        <option value="QUILOGRAMA">Quilograma</option>
                        <option value="METRO">Metro</option>
                    </select>
                </div>
            </div>
            <div class="control">
                <div class="select is-fullwidth">
                    <select id="selectProvider" v-model="product.provider">
                        <option value="undefined" selected disabled hidden>Selecione o Fornecedor</option>
                        <option :value="item" 
                            v-for= "item in providerList" :key="item.id"> {{ item.name }} </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Observação</label>
                <textarea class="textarea" v-model="product.observation" placeholder="Observação"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <router-link to="/"><button class="button is-link is-light">Voltar</button></router-link>
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
    import { Product } from '@/model/Product'
    import { Provider } from '@/model/Provider'
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class UpdateProductView extends Vue {

        private productClient: ProductClient = new ProductClient()
        private providerClient: ProviderClient = new ProviderClient()

        public product: Product = new Product()

        public providerList: Provider[] = []
        public productList: Product[] = []

        private id = Number(this.$route.params.id)

        public mounted(): void {
            this.selectProviderList()
            this.getProduct()
        }

        private getProduct(): void {
            this.productClient.findById(this.id).then(
                success => {
                    this.product = success
                },
                error => console.log(error)
            )
        }

        public onClickCadastrar(): void {
            
            this.productClient.save(this.product).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.product = new Product()
                },
                error => {
                    console.log(error)
                }
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