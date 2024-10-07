import { Router } from 'express';
import { createProduto, getProdutos, createUsuario, createPedido, getPedidos, getUsuarios} from './controllers';

const routes = Router();

routes.get('/produtos', getProdutos);
routes.post('/produtos', createProduto);
routes.get('/usuarios', getUsuarios);
routes.post('/usuarios', createUsuario);
routes.post('/pedidos', createPedido);
routes.get('/pedidos', getPedidos);

export { routes };