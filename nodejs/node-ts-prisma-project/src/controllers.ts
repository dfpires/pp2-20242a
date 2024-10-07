import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getProdutos = async (req: Request, res: Response) => {
  const produtos = await prisma.tb_produto.findMany();
  res.json(produtos);
};

export const createProduto = async (req: Request, res: Response) => {
  const { descricao, nome, url_imagem, preco } = req.body;
  const produto = await prisma.tb_produto.create({
    data: { descricao, nome, url_imagem, preco },
  });
  res.json(produto);
};

export const getUsuarios = async (req: Request, res: Response) => {
    try {
      const usuarios = await prisma.tb_usuario.findMany();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  };

export const createUsuario = async (req: Request, res: Response) => {
  const { email, nome, senha, telefone, data_aniversario } = req.body;
  const usuario = await prisma.tb_usuario.create({
    data: { email, nome, senha, telefone, data_aniversario },
  });
  res.json(usuario);
};

export const createPedido = async (req: Request, res: Response) => {
    const { id_usuario, status, data, itens } = req.body;
  
    try {
      // Criar o pedido
      const pedido = await prisma.tb_pedido.create({
        data: {
          id_usuario,
          status,
          data,
          itens: {
            create: itens.map((item: any) => ({
              id_produto: item.id_produto,
              qtde: item.qtde,
              preco: item.preco
            }))
          }
        },
        include: {
          itens: true
        }
      });
  
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar pedido' });
    }
  };

export const getPedidos = async (req: Request, res: Response) => {
  const pedidos = await prisma.tb_pedido.findMany({
    include: { itens: true },
  });
  res.json(pedidos);
};