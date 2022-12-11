<template>
    <div class="columns is-fullwidth">
        <h1>SAÍDA DE ESTOQUE</h1>
        <div class="column">
            <p class="control">
                <input class="input" type="text" placeholder="Pesquise aqui...">
            </p>
            <p class="control">
                <button class="button is-link">
                    Buscar
                </button>
            </p>
            <router-link to="/register-stock-output">
                <button class="button is-primary is-focused">
                    Registrar Saída de Estoque
                </button>
            </router-link>    
        </div>
        <table class="table is-bordered is-fullwidth">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Cliente</th>
                    <th>Produto</th>
                    <th>Quantidade de Saída</th>
                    <th>Valor de Saída</th>
                    <th>Data de Saída</th>
                    <th>Observação</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= 'item in stockOutputList'>
                    <th> {{ item.register }} </th>
                    <th> {{ item.client.name }} </th>
                    <th> {{ item.product.productName }} </th>
                    <th> {{ item.quantityOutput }} </th>
                    <th> {{ item.saleValue }} </th>
                    <th> {{ formatDate(item.departureDate) }} </th>
                    <th> {{ item.observation }} </th>
                    <th><button @click="onClickPageUpdate(item.id)" class="button is-warning is-focused">Editar</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
    .columns {
        h1 {
            font-size: 36px;
            font-weight: bold;
            color: black;
        }

        .column {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 0px 10px;
            .input {
                border-color: blue;
            }
        }

        table {
            thead {
                tr {
                    th {
                        font-size: 18px;
                    }
                }
            }
            tbody {
                tr {
                    th {
                        font-weight: 600;
                    }
                }
            }
        }

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        padding: 0px 50px;
    }
</style>

<script lang="ts">
    import { StockOutputClient } from '@/client/StockOutput.client';
    import { StockOutput } from '@/model/StockOutput';
    import router from '@/router';
    import { Component, Vue } from 'vue-property-decorator';
    import { RouterLink } from 'vue-router';
    
    @Component
    export default class StockOutputListView extends Vue {
        private stockOutputClient: StockOutputClient = new StockOutputClient()

        public stockOutputList: StockOutput[] = []
        
        public stockOutput: StockOutput = new StockOutput()

        public mounted(): void{
            this.listStockOutputs()
        }

        public formatDate(date : any) {
            let obj = new Date(date)
            return obj.toLocaleString()
        }

        private listStockOutputs(): void{
            this.stockOutputClient.findByActiveStockOutputs().then(
                success => {
                    this.stockOutputList = success
                },
                error => {
                    console.log(error)
                }
            )
        }

        public onClickPageUpdate(id: number) {
            router.push({ path:`/update-stock-output/${id}` })
        }
    }
</script>