<template>
    <div class="columnsCadastrar">
        <h1>CADASTRAR FORNECEDOR</h1>
        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" v-model="provider.name" placeholder="Nome">
            </div>

            <div class="control">
                <input class="input" type="text" v-model="provider.cnpjCpf" placeholder="CNPJ/CPF">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" v-model="provider.phoneNumber" placeholder="Telefone">
            </div>
            <div class="control">
                <input class="input" type="text" v-model="provider.addres" placeholder="Endereço">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <input class="input email" type="text" v-model="provider.email" placeholder="Email">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
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
    }
</style>

<script lang="ts">
    import { ProviderClient } from '@/client/Provider.client'
    import { Provider } from '@/model/Provider'
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class RegisterProviderView extends Vue {

        private providerClient: ProviderClient = new ProviderClient()

        public provider: Provider = new Provider()

        public providerList: Provider[] = []

        public mounted(): void {}

        public onClickCadastrar(): void {
            
            this.providerClient.save(this.provider).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.provider = new Provider()
                },
                error => {
                    console.log(error)
                }
            )
        }
    }
</script>