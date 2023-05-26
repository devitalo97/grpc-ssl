// Original file: src/infrastructure/api/proto/helloworld.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloRequest as _helloworld_HelloRequest, HelloRequest__Output as _helloworld_HelloRequest__Output } from '../helloworld/HelloRequest';
import type { HelloResponse as _helloworld_HelloResponse, HelloResponse__Output as _helloworld_HelloResponse__Output } from '../helloworld/HelloResponse';

export interface HelloWorldServiceClient extends grpc.Client {
  SayHello(argument: _helloworld_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloworld_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloworld_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloworld_HelloRequest, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloworld_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloworld_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloworld_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloworld_HelloRequest, callback: grpc.requestCallback<_helloworld_HelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloWorldServiceHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_helloworld_HelloRequest__Output, _helloworld_HelloResponse>;
  
}

export interface HelloWorldServiceDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_helloworld_HelloRequest, _helloworld_HelloResponse, _helloworld_HelloRequest__Output, _helloworld_HelloResponse__Output>
}
