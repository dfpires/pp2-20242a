-- CreateTable
CREATE TABLE "tb_produto" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "url_imagem" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "tb_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_aniversario" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_pedido" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "td_item_pedido" (
    "id" SERIAL NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "qtde" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "td_item_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_usuario_email_key" ON "tb_usuario"("email");

-- AddForeignKey
ALTER TABLE "tb_pedido" ADD CONSTRAINT "tb_pedido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "tb_usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_item_pedido" ADD CONSTRAINT "td_item_pedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "tb_pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_item_pedido" ADD CONSTRAINT "td_item_pedido_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "tb_produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
