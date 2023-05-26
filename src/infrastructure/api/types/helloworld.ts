import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloWorldServiceClient as _helloworld_HelloWorldServiceClient, HelloWorldServiceDefinition as _helloworld_HelloWorldServiceDefinition } from './helloworld/HelloWorldService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  helloworld: {
    HelloRequest: MessageTypeDefinition
    HelloResponse: MessageTypeDefinition
    HelloWorldService: SubtypeConstructor<typeof grpc.Client, _helloworld_HelloWorldServiceClient> & { service: _helloworld_HelloWorldServiceDefinition }
  }
}

