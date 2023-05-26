import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { HelloRequest__Output } from "../types/helloworld/HelloRequest";
import { HelloResponse } from "../types/helloworld/HelloResponse";
import { HelloWorldServiceHandlers } from "../types/helloworld/HelloWorldService";

export class ApiHandler implements HelloWorldServiceHandlers {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    SayHello(call: ServerUnaryCall<HelloRequest__Output, HelloResponse>, callback: sendUnaryData<HelloResponse>){
        const { name } = call.request
        callback(null, { message: `replied by server: ${name}` })
        return
    }
}