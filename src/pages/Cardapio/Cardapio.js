import React, { useEffect, useState } from 'react';
import api from '../../api'; // ajuste conforme sua estrutura

const CardapioAxios = () => {
  const [pratos, setPratos] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    api.get('https://restaurante-backend-2svy.onrender.com/api/pratos')
      .then(response => {
        setPratos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar pratos:', error);
        setErro('Erro ao carregar o cardápio.');
      });
  }, []);

  return (
    <div>
      <h2>Cardápio</h2>
      {erro && <p>{erro}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {pratos.map((prato, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '250px' }}>
            <img src={prato.urlImagem} alt={prato.nomePrato} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{prato.nomePrato}</h3>
            <p>{prato.descricao}</p>
            <p><strong>R$ {prato.preco.toFixed(2)}</strong></p>
            <p>Categoria: {prato.categoria}</p>
            <p>Status: {prato.disponibilidade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardapioAxios;
