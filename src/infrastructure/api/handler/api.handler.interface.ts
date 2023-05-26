import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { HelloRequest__Output } from "../types/helloworld/HelloRequest";
import { HelloResponse } from "../types/helloworld/HelloResponse";

export interface ApiHandlerInterface {
    sayHello: (call: ServerUnaryCall<HelloRequest__Output, HelloResponse>, callback: sendUnaryData<HelloResponse>) => void;
}