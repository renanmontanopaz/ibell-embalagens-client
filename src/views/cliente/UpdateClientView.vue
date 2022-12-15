<template>
    <div class="columnsCadastrar">
        <h1>EDITAR CLIENTE</h1>
        <div class="columns" v-if="notificacao.ativo">
          <div class="column is-12">
            <div :class="notificacao.classe">
              <button @click="onClickFecharNotificacao()" class="delete" ></button>
              {{ notificacao.mensagem }}
            </div>
          </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Nome</label>
                <input class="input" type="text" v-model="client.name" placeholder="Nome">
            </div>

            <div class="control">
                <label>CNPJ/CPF</label>
                <input class="input" type="text" v-model="client.cnpjCpf" placeholder="CNPJ/CPF">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Telefone</label>
                <input class="input" type="text" v-model="client.phoneNumber" placeholder="Telefone">
            </div>
            <div class="control">
                <label>Endereço</label>
                <input class="input" type="text" v-model="client.address" placeholder="Endereço">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control divEmail">
                <label>Email</label>
                <input class="input email" type="text" v-model="client.email" placeholder="Email">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Observação</label>
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

        .divEmail {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .email {
            width: 400px;
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
    import { ClientClient } from '@/client/Client.client'
    import { Client } from '@/model/Client'
    import { Component, Vue } from 'vue-property-decorator'
    import {Mensagem} from "@/model/Mensagem";

    @Component
    export default class UpdateClientView extends Vue {

        private clientClient: ClientClient = new ClientClient()

        public client: Client = new Client()

        public clientList: Client[] = []

        private id = Number(this.$route.params.id)
        private notificacao: Mensagem = new Mensagem()

        public mounted(): void {
            this.getClient()
        }

        private getClient(): void {
            this.clientClient.findById(this.id).then(
                success => {
                    this.client = success
                },
                error => console.log(error)
            )
        }

        public onClickCadastrar(): void {
            
            this.clientClient.save(this.client).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.notificacao = this.notificacao.new(
                        true, 'notification is-primary', 'Cliente atualizado com sucesso!'
                    )
                    this.client = new Client()
                },
                error => {
                    console.log(error)
                }
            )
        }

        private onClickFecharNotificacao(): void {
          this.notificacao = new Mensagem()
        }
    }
</script>