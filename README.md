
# Certificados grpc 📝  
Esse documento tem a intenção de apresentar as etapas necessárias para
para garatir a autenticidade entre um cliente e servidor grpc.

## Estapas 
1. Gerar chave privada e um certificado autoassinado para uma Autoridade de Certificação (CA) 
2. Gerar chave privada para o servidor
3. Gerar uma solicitação de assinatura de certificado (CSR) para o servidor
4. Gerar o certificado para o servidor (CRT) utilizando a autoridade de certificação (CA) para assinar o a solicitação (CSR)
5. Gerar chave privada para o cliente
6. Gerar uma solicitação de assinatura de certificado (CSR) para o cliente
7. Gerar o certificado para o client (CRT) utilizando a autoridade de certificação (CA) para assinar o a solicitação (CSR)

## Comandos por etapas  
### Etapa 1 
    openssl req -x509 -newkey rsa:4096 -keyout ca.key -out ca.crt -days 365 -subj "//CN=GRPCSERVER"
### Etapa 2 
    openssl genpkey -algorithm RSA -out server.key  
### Etapa 3 
    openssl req -new -key server.key -out server.csr -subj "//CN=localhost"
### Etapa 4
    openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365
### Etapa 5
    openssl genpkey -algorithm RSA -out client.key
### Etapa 6
    openssl req -new -key client.key -out client.csr -subj "//CN=GRPC_CLIENT_00"
### Etapa 7
    openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 365

## Arquivo bash
Dentro de src/infrastructure/api/cert existe um arquivo bash nomeado como: generate_certificates.sh.
Esse script executa todas as etapas citadas acima.

## Resultado  
Ao final do processo deve existir os seguintes arquivos:
1. ca.crt
2. ca.key
3. ca.srl
4. client.crt
5. client.csr
6. client.key
7. server.crt
8. server.csr
9. server.key


 
## Como rodar o projeto?  
Clone o repositório 

~~~bash  
  git clone https://link-to-project
~~~

Vá até o diretório do projeto  

~~~bash  
  cd grpc_ssl
~~~

Instale as dependências  

~~~bash  
npm install
~~~

Inicie o servidor  

~~~bash  
npm run start:dev
~~~  
