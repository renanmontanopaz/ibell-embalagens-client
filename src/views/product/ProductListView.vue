<template>
    <div class="columns is-fullwidth">
        <h1>LISTA DE PRODUTOS</h1>
        <div class="column">
            <p class="control">
                <input class="input" type="text" placeholder="Pesquise aqui...">
            </p>
            <p class="control">
                <button class="button is-link">
                    Buscar
                </button>
            </p>
            <router-link to="/register-product">
                <button class="button is-primary is-focused">
                    Cadastrar Produto
                </button>
            </router-link>    
        </div>
        <table class="table is-bordered is-fullwidth">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Codigo</th>
                    <th>Unidade de Medida</th>
                    <th>Quantidade</th>
                    <th>Valor Unitario</th>
                    <th>Fornecedor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= 'item in productList'>
                    <th> {{ item.productName }} </th>
                    <th> {{ item.code }} </th>
                    <th> {{ item.unitMeasure }} </th>
                    <th> {{ item.quantity }} </th>
                    <th> {{ item.unitValue }} </th>
                    <th> {{ item.provider.name }} </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
    .columns {
        h1 {
            font-size: 36px;
            color: black;
        }
        .column {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            .input {
                border-color: blue;
            }
        }
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        padding: 15px;
    }
</style>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { RouterLink } from "vue-router";
    import { ProductClient } from '@/client/Product.client';
    import { Product } from '@/model/Product';
    
    @Component
    export default class ProductListView extends Vue {
        private productClient: ProductClient = new ProductClient()
        public productList: Product[] = []
        public product: Product = new Product()
        public mounted(): void{
            this.listarProdutos()
        }
        private listarProdutos(): void{
            this.productClient.listAll().then(
                success => {
                    this.productList = success
                },
                error => {
                    console.log(error)
                }
            )
        }
    }
</script>