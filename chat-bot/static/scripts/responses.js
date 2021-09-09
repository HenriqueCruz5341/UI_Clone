function getBotResponse(input) {
  if (input === 'pedra') return 'papel';
  if (input === 'papel') return 'tesoura';
  if (input === 'tesoura') return 'pedra';

  if (input === 'oi') return 'Olá, como vai?';
  if (input === 'tchau') return 'Até logo!';
  return 'Desculpe, não entendi.';
}
