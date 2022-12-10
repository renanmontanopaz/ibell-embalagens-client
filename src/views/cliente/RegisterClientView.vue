<template>
    <div class="columnsCadastrar">
        <h1>CADASTRAR DE CLIENTE</h1>
        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" v-model="client.name" placeholder="Nome">
            </div>

            <div class="control">
                <input class="input" type="number" v-model="client.cnpjCpf" placeholder="CNPJ/CPF">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="number" v-model="client.phoneNumber" placeholder="Telefone">
            </div>
            <div class="control">
                <input class="input" type="text" v-model="client.address" placeholder="Endereço">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <input class="input email" type="text" v-model="client.email" placeholder="Email">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <textarea class="textarea" v-model="client.observation" placeholder="Observação"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <router-link to="/client"><button class="button is-link is-light">Voltar</button></router-link>
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

        .email {
            width: 400px;
        }

        .textarea {
            width: 400px;
            max-height: 200px;
        }
    }
</style>

<script lang="ts">
    import { ClientClient } from '@/client/Client.client'
    import { Client } from '@/model/Client'
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class RegisterClientView extends Vue {

        private clientClient: ClientClient = new ClientClient()

        public client: Client = new Client()

        public clientList: Client[] = []

        public mounted(): void {}

        public onClickCadastrar(): void {
            
            this.clientClient.save(this.client).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.client = new Client()
                },
                error => {
                    console.log(error)
                }
            )
        }
    }
</script>