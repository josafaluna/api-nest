import { Body, Controller, Post } from '@nestjs/common'
import { CriarJogadorDto } from './dtos/criar-jogador.dto'

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Post()
  async criarAtualizarJogador(@Body() jogadorDto: CriarJogadorDto) {
    const { email } = jogadorDto

    return JSON.stringify({
      nome: email,
    })
  }
}
