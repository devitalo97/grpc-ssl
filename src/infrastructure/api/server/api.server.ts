import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../types/helloworld';
import { ApiHandler } from '../handler/api.handler';
import * as fs from 'fs'

export class Server {
    static init(){
        const PROTO_PATH = __dirname + '/../proto/helloworld.proto'

        const packageDefinition = protoLoader.loadSync(
            PROTO_PATH,
            {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            }
        );
        const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

        const helloworld = protoDescriptor.helloworld;

        const helloworldHandler = new ApiHandler()

        const server = new grpc.Server();
        const credentials = grpc.ServerCredentials.createSsl(
            fs.readFileSync(__dirname + '/../cert/ca.crt'),
            [
                {
                    private_key: fs.readFileSync(__dirname + '/../cert/server.key'),
                    cert_chain: fs.readFileSync(__dirname + '/../cert/server.crt')
                }
            ],
            true
        )
        server.addService(helloworld.HelloWorldService.service, helloworldHandler);
        server.bindAsync('localhost:50051', credentials, () => {
            server.start();
            console.info("SERVER STARTED")
        });
    
    }
}