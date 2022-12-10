<template>
    <div class="columns is-fullwidth">
        <h1>CLIENTES</h1>
        <div class="column">
            <p class="control">
                <input class="input" type="text" placeholder="Pesquise aqui...">
            </p>
            <p class="control">
                <button class="button is-link">
                    Buscar
                </button>
            </p>
            <router-link to="/register-client">
                <button class="button is-primary is-focused">
                    Cadastrar Cliente
                </button>
            </router-link>    
        </div>
        <table class="table is-bordered is-fullwidth">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Nome</th>
                    <th>CNPJ/CPF</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Email</th>
                    <th>Observação</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= 'item in clientList'>
                    <th> {{ item.register }} </th>
                    <th> {{ item.name }} </th>
                    <th> {{ item.cnpjCpf }} </th>
                    <th> {{ item.phoneNumber }} </th>
                    <th> {{ item.address }} </th>
                    <th> {{ item.email }} </th>
                    <th> {{ item.observation }} </th>
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
    import { ClientClient } from '@/client/Client.client';
    import { Client } from '@/model/Client';
    import { Component, Vue } from 'vue-property-decorator';
    import { RouterLink } from "vue-router";
    
    @Component
    export default class ClientListView extends Vue {
        private clientClient: ClientClient = new ClientClient()

        public clientList: Client[] = []
        
        public client: Client = new Client()

        public mounted(): void{
            this.listClients()
        }

        private listClients(): void{
            this.clientClient.findByActiveClients().then(
                success => {
                    this.clientList = success
                },
                error => {
                    console.log(error)
                }
            )
        }
    }
</script>