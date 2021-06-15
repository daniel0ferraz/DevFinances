const Modal = {
  open() {
    // Abrir modal
    // Adicionar a class active ao modal
    document
      .querySelector('.modal-overlay')
      .classList
      .add('active')

  },
  close() {
    // Fechar o modal
    // remover a class active do modal
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}

const Transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Website',
    amount: 50000,
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
  },
]

const Transaction = {
  incomes() {
    // Somar entradas
  },
  expenses() {
    // Somar as saidas
  },
  total() {
    // Entradas - saidas
  }
}

// Substituir os dados do html com os dados do JS
