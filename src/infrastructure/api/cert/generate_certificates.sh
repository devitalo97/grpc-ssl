#!/bin/bash

passphrase="secret" 

# Etapa 1 
openssl req -x509 -newkey rsa:4096 -keyout ca.key -out ca.crt -days 365 -subj "//CN=GRPCSERVER" -passout pass:"$passphrase"

# Etapa 2 
openssl genpkey -algorithm RSA -out server.key  

# Etapa 3 
openssl req -new -key server.key -out server.csr -subj "//CN=localhost"

# Etapa 4
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -passin pass:"$passphrase"

# Etapa 5
openssl genpkey -algorithm RSA -out client.key

# Etapa 6
openssl req -new -key client.key -out client.csr -subj "//CN=GRPC_CLIENT_00"

# Etapa 7
openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 365 -passin pass:"$passphrase"
