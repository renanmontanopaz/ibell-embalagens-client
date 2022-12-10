<template>
    <div class="columnsCadastrar">
        <h1>CADASTRO DE FRETE</h1>
        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" v-model="product.code" placeholder="Código">
            </div>

            <div class="control">
                <input class="input" type="text" v-model="product.productName" placeholder="Nome">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <label>Unidade de Medida</label>
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
                <label>Fornecedor</label>
                <div class="select is-fullwidth">
                    <select id="selectProvider" v-model="product.provider">
                        <option value="" selected disabled hidden>Fornecedor</option>
                        <option :value="item" 
                            v-for= "item in providerList" :key="item.id"> {{ item.name }} </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" v-model="product.observation" placeholder="Observação">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/product"><button class="button is-link is-light">Voltar</button></router-link>
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
            margin-bottom: 15px;
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
    export default class FormProductView extends Vue {

        private productClient: ProductClient = new ProductClient()
        private providerClient: ProviderClient = new ProviderClient()

        public product: Product = new Product()

        public providerList: Provider[] = []
        public productList: Product[] = []

        public mounted(): void {
            this.selectProviderList()
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

        // public changeUnitMeasure(): void {
        //     var selectUnitMeasure = (<HTMLSelectElement>document.getElementById('selectUnitMeasure')).value;

        //     console.log(selectUnitMeasure)

        //     this.productClient.findByEstado(Number(selectEstado)).then(
        //         success => this.cidadeOrigemList = success,
        //         error => console.log(error)
        //     )
        // }

        // public changeProvider(): void {
        //     var selectProvider = (<HTMLSelectElement>document.getElementById('selectProvider')).value;

        //     console.log(selectProvider)

            
        // }

    }

</script>