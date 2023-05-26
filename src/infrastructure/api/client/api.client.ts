import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../types/helloworld';
import { HelloWorldServiceClient } from '../types/helloworld/HelloWorldService';
import { HelloRequest } from '../types/helloworld/HelloRequest';
import { HelloResponse__Output } from '../types/helloworld/HelloResponse';
import { SurfaceCall } from '@grpc/grpc-js/build/src/call';
import * as fs from 'fs'

export class Client {
    static _client: HelloWorldServiceClient;

    static sayHello(argument: HelloRequest, callback: grpc.requestCallback<HelloResponse__Output>): SurfaceCall {
        return this._client.SayHello(argument, callback)
    }

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
        // The protoDescriptor object has the full package hierarchy
        const helloworld = protoDescriptor.helloworld
        const credentials = grpc.credentials.createSsl(
            fs.readFileSync(__dirname + '/../cert/ca.crt'),
            fs.readFileSync(__dirname + '/../cert/client.key'),
            fs.readFileSync(__dirname + '/../cert/client.crt')
        )
        this._client = new helloworld.HelloWorldService("localhost:50051", credentials)
        console.info("CLIENT STARTED")

        setInterval(() => {
            this.sayHello({ name: 'GRPC_CLIENT_00' }, (err, value) => {
                if(err){
                    console.error(err)
                    return
                }
                console.error(value)
            })
        }, 5000)
    }
  
}