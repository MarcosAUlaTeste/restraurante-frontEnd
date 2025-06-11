import React, { useState } from 'react';
import api from '../../api'; // ajustado conforme a estrutura do seu projeto

const CadastroPratoAxios = () => {
  const [nomePrato, setNomePrato] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('Prato Principal');
  const [disponibilidade, setDisponibilidade] = useState('Em estoque');
  const [urlImagem, setUrlImagem] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMensagem('');

    const novoPrato = {
      nomePrato,
      descricao,
      preco: parseFloat(preco),
      categoria,
      disponibilidade,
      urlImagem,
    };

    try {
      await api.post('/pratos', novoPrato);
      setMensagem('✅ Prato cadastrado com sucesso!');
      // Limpa os campos
      setNomePrato('');
      setDescricao('');
      setPreco('');
      setCategoria('Prato Principal');
      setDisponibilidade('Em estoque');
      setUrlImagem('');
    } catch (error) {
      console.error('Erro ao cadastrar prato:', error);
      setMensagem('❌ Erro ao cadastrar o prato.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Prato (com Axios)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input value={nomePrato} onChange={e => setNomePrato(e.target.value)} required />
        </div>
        <div>
          <label>Descrição:</label>
          <input value={descricao} onChange={e => setDescricao(e.target.value)} required />
        </div>
        <div>
          <label>Preço:</label>
          <input type="number" step="0.01" value={preco} onChange={e => setPreco(e.target.value)} required />
        </div>
        <div>
          <label>Categoria:</label>
          <select value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option value="Prato Principal">Prato Principal</option>
            <option value="Entrada">Entrada</option>
            <option value="Sobremesa">Sobremesa</option>
            <option value="Bebida">Bebida</option>
          </select>
        </div>
        <div>
          <label>Disponibilidade:</label>
          <select value={disponibilidade} onChange={e => setDisponibilidade(e.target.value)}>
            <option value="Em estoque">Em estoque</option>
            <option value="Indisponível">Indisponível</option>
          </select>
        </div>
        <div>
          <label>URL da Imagem:</label>
          <input value={urlImagem} onChange={e => setUrlImagem(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroPratoAxios;
