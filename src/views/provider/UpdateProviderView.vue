<template>
    <div class="columnsCadastrar">
        <h1>EDITAR FORNECEDOR</h1>
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
                <input class="input" type="text" v-model="provider.name" placeholder="Nome">
            </div>

            <div class="control">
                <label>CNPJ/CPF</label>
                <input class="input" type="text" v-model="provider.cnpjCpf" placeholder="CNPJ/CPF">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Telefone</label>
                <input class="input" type="text" v-model="provider.phoneNumber" placeholder="Telefone">
            </div>
            <div class="control">
                <label>Endereço</label>
                <input class="input" type="text" v-model="provider.addres" placeholder="Endereço">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control divEmail">
                <label>Email</label>
                <input class="input email" type="text" v-model="provider.email" placeholder="Email">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Observação</label>
                <textarea class="textarea" v-model="provider.observation" placeholder="Observação"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <router-link to="/provider"><button class="button is-link is-light">Voltar</button></router-link>
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

        .divEmail {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        label {
            color: black;
            font-weight: 700;
        }
    }
</style>

<script lang="ts">
    import { ProviderClient } from '@/client/Provider.client'
    import { Provider } from '@/model/Provider'
    import { Component, Vue } from 'vue-property-decorator'
    import {Mensagem} from "@/model/Mensagem";

    @Component
    export default class UpdateProviderView extends Vue {

        private providerClient: ProviderClient = new ProviderClient()

        public provider: Provider = new Provider()
        private notificacao: Mensagem = new Mensagem()

        public providerList: Provider[] = []

        private id = Number(this.$route.params.id)

        public mounted(): void {
            this.getProvider()
        }

        private getProvider(): void {
            this.providerClient.findById(this.id).then(
                success => {
                    this.provider = success
                },
                error => console.log(error)
            )
        }

        public onClickCadastrar(): void {
            
            this.providerClient.save(this.provider).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.notificacao = this.notificacao.new(
                        true, 'notification is-primary', 'Fornecedor atualizado com sucesso!'
                    )
                    this.provider = new Provider()
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