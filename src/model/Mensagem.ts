export class Mensagem {

    ativo! : boolean
    classe!: string
    mensagem!: string

    public new(ativo: boolean, classe: string, mensagem: string): Mensagem {
        const notificacao : Mensagem = new Mensagem()

        notificacao.ativo = ativo
        notificacao.classe = classe
        notificacao.mensagem = mensagem

        return notificacao
    }
}